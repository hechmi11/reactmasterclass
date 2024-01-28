import React, { useState, useEffect } from "react";
import { Line, Column } from "@ant-design/plots";
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
  Row,
  Col,
} from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getAssurances } from "../../../featuers/assurance/assuranceSlice";

const Statistiques = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const handeleGetAssurance = () => {
    dispatch(getAssurances())
      .then((res) => {
        const { assurances } = res.payload;
        console.log(assurances);
        setData(
          assurances.map((v) => {
            return {
              title: v.title,
              price: parseFloat(v.price.$numberDecimal),
            };
          })
        );
      })
      .catch((err) => console.log(err));
  };
  const config = {
    data,
    width: 370,
    height: 250,
    padding: "auto",
    xField: "title",
    yField: "price",
    xAxis: {
      tickCount: 5,
    },
  };

  useEffect(() => {
    handeleGetAssurance();
  }, []);
  return (
    <div>
      <Row gutter={[18, 18]}>
        <Col xs={12}>
          <Flex justify="center" align="center">
            <Column {...config} />
          </Flex>
        </Col>

        <Col xs={12}>
          <Flex justify="center" align="center">
            <Line {...config} />
          </Flex>
        </Col>

        <Col xs={12}>
          <Flex justify="center" align="center">
            <Line {...config} />
          </Flex>
        </Col>

        <Col xs={12}>
          <Flex justify="center" align="center">
            <Line {...config} />
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Statistiques;
