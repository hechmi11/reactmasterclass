import React, { useState } from "react";
import { Button, Drawer, Select, Space, Form, Input, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { createAssurances } from "../../../featuers/assurance/assuranceSlice";

import { useDispatch } from "react-redux";

const CreateAssurance = (properties) => {
  const dispatch = useDispatch();
  const { openCreate, setOpenCreate } = properties.createProps;

  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleCreateAssurance = (values) => {
    dispatch(createAssurances(values))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const onFinish = (values) => {
    console.log(values);
    handleCreateAssurance(values);
  };

  return (
    <div>
      <Drawer
        title="Ajouter Assurance"
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
                label="Titre"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le nom de l assurance!",
                  },
                ]}
              >
                <Input placeholder="Veuillez remplir le nom de l'assurance!" />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Prix"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Veuillez donner le prix de l assurance!",
                  },
                ]}
              >
                <Input placeholder="Veuillez donner le prix de l'assurance!" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                label="description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir le champs déscription!",
                  },
                ]}
              >
                <Input placeholder="Veuillez donner une description de l'assurance!" />
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

export default CreateAssurance;
