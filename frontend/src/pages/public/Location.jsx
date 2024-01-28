import React, { useState } from "react";
import Etapes from "../../components/Etapes";
import { styled } from "styled-components";
import {
  Button,
  Select,
  Form,
  Row,
  Col,
  Card,
  Flex,
  Switch,
  Input,
  Radio,
  Space,
} from "antd";
import {
  EyeOutlined,
  UserAddOutlined,
  QuestionCircleOutlined,
  CompassOutlined,
  ProjectOutlined,
  ColumnWidthOutlined,
  ColumnHeightOutlined,
  GoldOutlined,
} from "@ant-design/icons";
import fabia from "../../assets/img/services/fabia-22.png";
const Location = () => {
  const [visible, setVisible] = useState(false);

  const [detailOptions, setDetailOptions] = useState([
    {
      id: 1,
      description: "GPS",
      price: 10,
    },
    {
      id: 2,
      description: "Chauffeur",
      price: 15,
    },
    {
      id: 3,
      description: "Assurance tout risque",
      price: 25,
    },
  ]);

  const [formLocation] = Form.useForm();
  const LocationS = styled.div`
    padding: 15px;
    background-color: white;
    .etapes {
      padding: 15px 20px;
      background-color: white;
      margin: 20px 0;
    }
    .location {
      padding: 15px 20px;
      background-color: white;
      margin: 20px 0;
      .option {
        background-color: #ccc;
        .text-options {
          font-size: 18px;
        }
      }
      .assurances {
        margin: 10px 0;
      }
    }
  `;
  const onSwitchConducteur = (checked) => {
    console.log(`switch  Conducteur ${checked}`);
  };
  const onSwitchGPS = (checked) => {
    console.log(`switch GPS ${checked}`);
  };
  const onSwitchEssence = (checked) => {
    console.log(`switch Essence ${checked}`);
  };
  const onChangeRehausseur = (v) => {
    console.log(`Rehausseur ${v}`);
  };
  const onChangeSiegeBebe = (v) => {
    console.log(`SiegeBebe ${v}`);
  };
  const onChangeSiegeEnfant = (v) => {
    console.log(`SiegeEnfant ${v}`);
  };

  const [valueRadio, setValueRadio] = useState(1);

  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setValueRadio(e.target.value);
  };

  return (
    <LocationS>
      <div className="etapes">
        <Etapes etape={2} />
      </div>
      <Row className="location" gutter={[18, 18]}>
        <Col xs={24} md={18} id="left-part">
          <Card
            title="Options"
            style={{ display: "block", backgroundColor: "#fff" }}
          >
            <Row id="options" gutter={[18, 18]}>
              <Col md={8}>
                <Card className="option">
                  <Flex justify="end">
                    <Switch onChange={onSwitchConducteur} />
                  </Flex>
                  <Flex justify="start" align="center" gap="middle">
                    <div>
                      <UserAddOutlined style={{ fontSize: "23px" }} />
                    </div>
                    <div className="text-options">
                      <div className="text-title">2 eme conducteur</div>
                      <div className="text-description">15 DT / Jour</div>
                    </div>
                  </Flex>
                </Card>
              </Col>
              <Col md={8}>
                <Card className="option">
                  <Flex justify="end">
                    <Switch onChange={onSwitchGPS} />
                  </Flex>
                  <Flex justify="start" align="center" gap="middle">
                    <div>
                      <CompassOutlined style={{ fontSize: "23px" }} />
                    </div>
                    <div className="text-options">
                      <div className="text-title">GPS</div>
                      <div className="text-description">20 DT / Jour</div>
                    </div>
                  </Flex>
                </Card>
              </Col>
              <Col md={8}>
                <Card className="option">
                  <Flex justify="end">
                    <Switch onChange={onSwitchEssence} />
                  </Flex>
                  <Flex justify="start" align="center" gap="middle">
                    <div>
                      <ProjectOutlined style={{ fontSize: "23px" }} />
                    </div>
                    <div className="text-options">
                      <div className="text-title">Plein essence</div>
                      <div className="text-description">40 DT </div>
                    </div>
                  </Flex>
                </Card>
              </Col>

              <Col md={8}>
                <Card className="option">
                  <Flex justify="end">
                    <Select
                      style={{
                        width: 60,
                      }}
                      onChange={onChangeRehausseur}
                      defaultValue="0"
                      options={[
                        {
                          value: "0",
                          label: "0",
                        },
                        {
                          value: "1",
                          label: "1",
                        },

                        {
                          value: "2",
                          label: "2",
                        },
                      ]}
                    />
                  </Flex>
                  <Flex justify="start" align="center" gap="middle">
                    <div>
                      <ColumnWidthOutlined style={{ fontSize: "23px" }} />
                    </div>
                    <div className="text-options">
                      <div className="text-title">Rehausseur</div>
                      <div className="text-description">10 DT / Jour</div>
                    </div>
                  </Flex>
                </Card>
              </Col>
              <Col md={8}>
                <Card className="option">
                  <Flex justify="end">
                    <Select
                      style={{
                        width: 60,
                      }}
                      onChange={onChangeSiegeBebe}
                      defaultValue="0"
                      options={[
                        {
                          value: "0",
                          label: "0",
                        },
                        {
                          value: "1",
                          label: "1",
                        },
                        {
                          value: "2",
                          label: "2",
                        },
                      ]}
                    />
                  </Flex>
                  <Flex justify="start" align="center" gap="middle">
                    <div>
                      <ColumnHeightOutlined style={{ fontSize: "23px" }} />
                    </div>
                    <div className="text-options">
                      <div className="text-title">Siège bébé</div>
                      <div className="text-description">10 DT / Jour</div>
                    </div>
                  </Flex>
                </Card>
              </Col>
              <Col md={8}>
                <Card className="option">
                  <Flex justify="end">
                    <Select
                      style={{
                        width: 60,
                      }}
                      onChange={onChangeSiegeEnfant}
                      defaultValue="0"
                      options={[
                        {
                          value: "0",
                          label: "0",
                        },
                        {
                          value: "1",
                          label: "1",
                        },
                        {
                          value: "2",
                          label: "2",
                        },
                      ]}
                    />
                  </Flex>
                  <Flex justify="start" align="center" gap="middle">
                    <div>
                      <GoldOutlined style={{ fontSize: "23px" }} />
                    </div>
                    <div className="text-options">
                      <div className="text-title">Siège enfant</div>
                      <div className="text-description">15 DT / Jour</div>
                    </div>
                  </Flex>
                </Card>
              </Col>
            </Row>
          </Card>

          <Row id="assurances" className="assurances">
            <Col xs={24}>
              <Card
                title="Assurances"
                style={{ display: "block", backgroundColor: "#ccc" }}
              >
                <Radio.Group onChange={onChangeRadio} value={valueRadio}>
                  <Space direction="vertical" style={{ display: "block" }}>
                    <Radio value={1}>
                      Assurance protection plus (seulement 8 € / Jour) &nbsp;{" "}
                      <div
                        style={{
                          display: "inline-block",
                          position: "relative",
                        }}
                        className="helper-icon"
                        onMouseEnter={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}
                      >
                        <QuestionCircleOutlined />
                        {visible && (
                          <div
                            className="helper-panel"
                            style={{
                              display: "inline-block",
                              width: "160px",
                              backgroundColor: "white",
                              padding: "10px",
                              fontSize: "14px",
                              position: "absolute",
                              bottom: "17px",
                              left: "10px",
                            }}
                          >
                            Protection contre le vol Protection bris de glace,
                            phares et pneumatiques Protection personnelle
                            accident (conducteur et passagers)
                          </div>
                        )}
                      </div>
                    </Radio>
                    <Radio value={2}>
                      Assurance tout risque (seulement 20 € / Jour)
                    </Radio>
                    <Radio value={3}>Je ne souhaite pas d'assurance</Radio>
                  </Space>
                </Radio.Group>
              </Card>
            </Col>
          </Row>

          <Row id="formulaire-conducteur">
            <Col xs={24}>
              <Card
                style={{ backgroundColor: "#ccc" }}
                title="Détails conducteur"
              >
                <Form layout="vertical" className="locationForm">
                  <Row gutter={[12, 12]}>
                    <Col xs={12}>
                      <Flex gap="middle">
                        <Form.Item
                          label="Titre"
                          name="titre"
                          style={{ width: "75px" }}
                        >
                          <Select
                            defaultValue="-"
                            options={[
                              {
                                value: "-",
                                label: "-",
                              },
                              {
                                value: "1",
                                label: "M",
                              },
                              {
                                value: "2",
                                label: "Mme",
                              },
                            ]}
                          />
                        </Form.Item>

                        <Form.Item
                          label="Prénom"
                          name="prenom"
                          style={{ width: "245px" }}
                        >
                          <Input />
                        </Form.Item>
                      </Flex>
                    </Col>
                    <Col xs={12}>
                      <Form.Item label="Nom" name="nom">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={12}>
                      <Form.Item label="Email" name="email">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={12}>
                      <Form.Item label="Téléphone" name="telephone">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={12}>
                      <Form.Item label="Date de naissane" name="dob">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={12}>
                      <Form.Item label="Adresse" name="adresse">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24}>
                      <Form.Item label="Options supplémentaires" name="options">
                        <Input.TextArea />
                      </Form.Item>
                    </Col>
                    <Col xs={24}>
                      <Form.Item style={{ textAlign: "right" }}>
                        <Button type="primary" htmlType="submit" size="large">
                          Reserver
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col xs={24} md={6} id="right-part">
          <Card cover={<img alt="voiture" src={fabia} />}>
            {detailOptions.map((v, i) => (
              <Flex
                key={i}
                className="detail-option"
                justify="space-between"
                align="center"
                style={{ marginBottom: "10px" }}
              >
                <div>{v.description} </div> <div>{v.price} DT</div>
              </Flex>
            ))}
          </Card>
        </Col>
      </Row>
    </LocationS>
  );
};

export default Location;
