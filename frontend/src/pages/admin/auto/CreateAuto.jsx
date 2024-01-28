import React, { useState } from "react";
import {
  Button,
  Drawer,
  Select,
  Space,
  Form,
  Input,
  Row,
  Col,
  Upload,
  DatePicker,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  brands,
  models,
  couleurs,
  horsepowers,
  transmissions,
  nbrSieges,
  categories,
  energies,
} from "../../../data/autoData";

import { useDispatch } from "react-redux";

const CreateAuto = (properties) => {
  const dispatch = useDispatch();
  const { openCreate, setOpenCreate } = properties.createProps;
  //console.log(props);

  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  const handleCreateAuto = (values) => {
    dispatch(createAuto(values))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const onFinish = (values) => {
    const fd = new FormData();

    // champs texte
    Object.entries(values).forEach(([key, value]) => {
      // console.log(`${key}` + ":" + `${value}`);
      fd.append(`${key}`, `${value}`);
    });

    // fichier binaire
    fileList.forEach((file) => {
      fd.append("files[]", file);
    });

    // date
    fd.append("model", "rio");
    fd.append("dateDeCirculationV2", new Date(values.dateDeCirculation));

    handleCreateAuto(fd);
  };

  return (
    <div>
      <Drawer
        title="Ajouter Auto"
        placement={"right"}
        width={600}
        onClose={() => setOpenCreate(false)}
        open={openCreate}
        extra={
          <Space>
            <Button onClick={() => setOpenCreate(false)}>Cancel</Button>
            <Button type="primary" onClick={() => setOpenCreate(false)}>
              OK
            </Button>
          </Space>
        }
      >
        <Form
          name="CreateForm"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row gutter={[12, 2]}>
            <Col xs={12}>
              <Form.Item
                label="Matricule"
                name="matricule"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ matricule!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Carte Grise"
                name="carteGrise"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ carte grise!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Marque"
                name="brand"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ Marque!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Date de circulation"
                name="dateDeCirculation"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ date de circulation!",
                  },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Couleur"
                name="color"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ Couleur!",
                  },
                ]}
              >
                <Select
                  showSearch
                  className="select"
                  placeholder="Veuillez choisir la couleur"
                  options={couleurs}
                />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Energie"
                name="energy"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ energie!",
                  },
                ]}
              >
                <Select
                  showSearch
                  className="select"
                  placeholder="Veuillez choisir le type d'energie"
                  options={energies}
                />
              </Form.Item>
            </Col>

            <Col xs={12}>
              <Form.Item
                label="Puissance"
                name="horsepower"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ Puissance!",
                  },
                ]}
              >
                <Select
                  showSearch
                  className="select"
                  placeholder="Veuillez choisir la puissance"
                  options={horsepowers}
                />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Transmission"
                name="transmission"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ Transmission!",
                  },
                ]}
              >
                <Select
                  showSearch
                  className="select"
                  placeholder="Veuillez choisir la transmission"
                  options={transmissions}
                />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Nombre de sieges"
                name="nbrSiege"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ nbrSiege!",
                  },
                ]}
              >
                <Select
                  showSearch
                  className="select"
                  placeholder="Veuillez choisir le nombre de sieges"
                  options={nbrSieges}
                />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Categorie"
                name="category"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ Categorie!",
                  },
                ]}
              >
                <Select
                  showSearch
                  className="select"
                  placeholder="Veuillez choisir la categorie"
                  options={categories}
                />
              </Form.Item>
            </Col>

            <Col xs={12}>
              <Form.Item
                label="Disponibilite"
                name="available"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ Disponibilite!",
                  },
                ]}
              >
                <Select
                  showSearch
                  className="select"
                  placeholder="Veuillez choisir la disponibilite"
                  options={[
                    { label: "Oui", value: true },
                    { label: "Non", value: false },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Photo"
                // name="photos"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ Photo!",
                  },
                ]}
              >
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Attacher un fichier</Button>
                </Upload>
              </Form.Item>
            </Col>

            <Col xs={24}>
              {/* button */}
              <Form.Item style={{ textAlign: "right" }}>
                <Button type="primary" htmlType="submit">
                  Sauvegarder
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default CreateAuto;
