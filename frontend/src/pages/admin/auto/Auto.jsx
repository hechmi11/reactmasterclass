import React, { useState, useEffect } from "react";
import {
  Space,
  Table,
  Tag,
  Flex,
  Button,
  Input,
  Breadcrumb,
  Tooltip,
  Popconfirm,
} from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import {
  getAutos,
  deleteAuto,
  addAuto,
} from "../../../featuers/auto/autoSlice";

import { useDispatch } from "react-redux";

import EditAuto from "./EditAuto";
import CreateAuto from "./CreateAuto";

const { Search } = Input;

const Autos = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [recordData, setRecordData] = useState({});
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState({ state: false, action: "" });
  const [loading, setLoading] = useState(false);
  const [renderTable, setRenderTable] = useState(0);

  const breadcrumbItems = [
    {
      title: "Dashboard",
    },
    {
      title: "Gestion parc Auto",
    },
  ];
  const columns = [
    {
      title: "Matricule",
      dataIndex: "matricule",
      key: "matricule",
      // render: (text) => <Tag>{text.substring(0, 8)}</Tag>,
    },
    {
      title: "Marque",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Modele",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Date de circulation",
      key: "dateDeCirculation",
      dataIndex: "dateDeCirculation",
    },
    {
      title: "Energie",
      key: "energy",
      dataIndex: "energy",
    },
    {
      title: "Couleur",
      key: "color",
      dataIndex: "color",
    },
    {
      title: "Disponibilité",
      key: "available",
      dataIndex: "available",
      render: (available) => (
        <Tag color={available ? "green" : "red"}>
          {available ? "Oui" : "Non"}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Voir" color={"blue"} key={"gray1"}>
            <Button
              type="primary"
              icon={<EyeOutlined />}
              loading={false}
              onClick={() => {
                setOpenEdit({ state: true, action: "voir" });
                setRecordData(record);
              }}
            />
          </Tooltip>

          <Tooltip title="Editer" color={"orange"} key={"gray2"}>
            <Button
              className="edit_button"
              icon={<EditOutlined />}
              loading={false}
              onClick={() => {
                setOpenEdit({ state: true, action: "editer" });
                setRecordData(record);
              }}
            />
          </Tooltip>

          <Tooltip title="Supprimer" color={"red"} key={"gray3"}>
            <Popconfirm
              title="Suppression la voiture"
              description="Voulez-vous supprimer cette ressource ?"
              okText="Oui"
              cancelText="Non"
              onConfirm={() => handleDeleteAuto(record._id)}
            >
              <Button danger icon={<DeleteOutlined />} loading={false} />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const createProps = { openCreate, setOpenCreate };
  const editProps = { openEdit, setOpenEdit, recordData };

  const handleGetAutos = () => {
    setLoading(true);
    dispatch(getAutos())
      .then((res) => {
        const { autos } = res.payload;

        setLoading(false);

        const newAutos = autos.map((item) => {
          return { ...item, key: item._id };
        });

        setData(newAutos);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };
  const handlecreateAuto = () => {
    setLoading(true);
    dispatch(addAuto())
      .then((res) => {
        const { autos } = res.payload;

        setLoading(false);

        const newAutos = autos.map((item) => {
          return { ...item, key: item._id };
        });

        setData(newAutos);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };
  const handleDeleteAuto = (id) => {
    console.log(id);
    setLoading(true);
    dispatch(deleteAuto(id))
      .then((res) => {
        console.log(res);
        setRenderTable(Math.random());
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetAutos();
  }, [renderTable]);

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <Flex
        style={{ margin: "35px 0px" }}
        justify="space-between"
        align="center"
      >
        <Search
          placeholder="rechercher une voiture"
          onSearch={onSearch}
          style={{
            width: 350,
          }}
        />

        <Button
          type="primary"
          icon={<PlusOutlined />}
          loading={false}
          onClick={() => setOpenCreate(true)}
        >
          Créer
        </Button>
      </Flex>

      <Table columns={columns} dataSource={data} loading={loading} />

      <CreateAuto createProps={createProps} />
      <EditAuto editProps={editProps} />
    </div>
  );
};

export default Autos;
