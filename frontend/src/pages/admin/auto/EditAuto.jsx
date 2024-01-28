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

const EditAuto = (props) => {
  const { openEdit, setOpenEdit, recordData } = props.editProps;

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Drawer
        title={openEdit.action == "voir" ? "Voir Auto" : "Modifier Auto"}
        placement={"right"}
        width={500}
        onClose={() => setOpenEdit(false)}
        open={openEdit.state}
        extra={
          <Space>
            <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
            <Button type="primary" onClick={() => setOpenEdit(false)}>
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
                initialValue={recordData.matricule}
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ matricule!",
                  },
                ]}
              >
                <Input disabled={openEdit.action == "voir" ? true : false} />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Carte Grise"
                name="carteGrise"
                initialValue={recordData.carteGrise}
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ carte grise!",
                  },
                ]}
              >
                <Input disabled={openEdit.action == "voir" ? true : false} />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Marque"
                name="brands"
                initialValue={recordData.brand}
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champ Marque!",
                  },
                ]}
              >
                <Input disabled={openEdit.action == "voir" ? true : false} />
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
                <DatePicker
                  style={{ width: "100%" }}
                  disabled={openEdit.action == "voir" ? true : false}
                />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Couleur"
                name="color"
                initialValue={recordData.color}
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
                  disabled={openEdit.action == "voir" ? true : false}
                />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Energie"
                name="energy"
                initialValue={recordData.energy}
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
                  disabled={openEdit.action == "voir" ? true : false}
                />
              </Form.Item>
            </Col>

            <Col xs={12}>
              <Form.Item
                label="Puissance"
                name="horsepower"
                initialValue={recordData.horsepower}
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
                  disabled={openEdit.action == "voir" ? true : false}
                />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Transmission"
                name="transmission"
                initialValue={recordData.transmission}
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
                  disabled={openEdit.action == "voir" ? true : false}
                />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Nombre de sieges"
                name="nbrSiege"
                initialValue={recordData.nbrSiege}
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
                  disabled={openEdit.action == "voir" ? true : false}
                />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Categorie"
                name="category"
                initialValue={recordData.category}
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
                  disabled={openEdit.action == "voir" ? true : false}
                />
              </Form.Item>
            </Col>

            <Col xs={12}>
              <Form.Item
                label="Disponibilite"
                name="available"
                initialValue={recordData.available}
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
                  disabled={openEdit.action == "voir" ? true : false}
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
                  <Button
                    icon={
                      <UploadOutlined
                        disabled={openEdit.action == "voir" ? true : false}
                      />
                    }
                  >
                    Attacher un fichier
                  </Button>
                </Upload>
              </Form.Item>
            </Col>

            <Col xs={24}>
              {openEdit.action == "editer" && (
                <Form.Item style={{ textAlign: "right" }}>
                  <Button type="primary" htmlType="submit">
                    Modifier
                  </Button>
                </Form.Item>
              )}
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default EditAuto;
