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

const EditAssurance = (props) => {
  const { openEdit, setOpenEdit, recordData } = props.editProps;

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Drawer
        title="Modifer Assurance"
        placement={"right"}
        width={600}
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
                label="Titre"
                name="Titre"
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
                name="Prix"
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
                    message: "Veuillez remplir le champs description!",
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
                  Modifier
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default EditAssurance;
