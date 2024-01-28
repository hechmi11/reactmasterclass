import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  Flex,
  Input,
  Button,
  Table,
  Space,
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
  getAssurances,
  deleteAssurance,
} from "../../../featuers/assurance/assuranceSlice";
import CreateAssurances from "./CreateAssurance";
import EditAssurance from "./EditAssurance";

import { useDispatch } from "react-redux";

const { Search } = Input;

const ManageAssurance = () => {
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
      title: "Gérer assurance",
    },
  ];
  const columns = [
    {
      title: "Titre",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Déscription ",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Prix",
      dataIndex: "price",
      key: "price",
      render: (v) => <span> {v.$numberDecimal}</span>,
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
              description="Voulez-vous supprimer cette assurance ?"
              okText="Oui"
              cancelText="Non"
              onConfirm={() => handleDeleteAssurances(record._id)}
            >
              <Button danger icon={<DeleteOutlined />} loading={false} />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];
  const handleGetAssurance = () => {
    setLoading(true);
    dispatch(getAssurances())
      .then((res) => {
        const { assurances } = res.payload;

        setLoading(false);

        const newAssurances = assurances.map((item) => {
          return { ...item, key: item._id };
        });

        setData(newAssurances);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };
  const handleDeleteAssurances = (id) => {
    console.log(id);
    setLoading(true);
    dispatch(deleteAssurance(id))
      .then((res) => {
        console.log(res);
        setRenderTable(Math.random());
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const createProps = { openCreate, setOpenCreate };
  const editProps = { openEdit, setOpenEdit, recordData };

  useEffect(() => {
    handleGetAssurance();
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
          placeholder="rechercher par Assurance"
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

      <Table columns={columns} dataSource={data} loading={false} />

      <CreateAssurances createProps={createProps} />
      <EditAssurance editProps={editProps} />
    </div>
  );
};

export default ManageAssurance;
