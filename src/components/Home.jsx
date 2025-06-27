import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Image,
  Modal,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import FilterTabs from "../common/FilterTabs";
import CustomCarousel from "../CustomCarousel";
import image from "../assets/1723098210-d2948eaf8f3d36d39cf5ed9c2a6317a1.jpg";
import CardBasic from "../common/CardBasic";
import axios from "axios";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { countriesData } from "../stateManagement/slice";
import { MdOutlineMenu } from "react-icons/md";

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Asia", "Europe", "Americas"];
  // const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  // const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesAllData.countries);

  // console.log(countries,"countries");

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const getCountries = async () => {
    try {
      const response = await axios.get(
        "https://restcountries.com/v2/all?fields=name,region,flag"
      );
      // setCountries(response.data);
      setFilterCountries(response.data);

      dispatch(countriesData(response.data));
    } catch (error) {
      console.error("Failed to fetch countries:", error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const socialMedia = [
    { id: 1, icon: <SlSocialFacebook /> },
    {
      id: 2,
      icon: <CiTwitter />,
    },
    {
      id: 3,
      icon: <FiLinkedin />,
    },
    {
      id: 4,
      icon: <AiOutlineYoutube />,
    },
  ];

  return (
    <Container className=" pt-4 ">
      <Row className="gap-4">
        <div className="d-flex justify-content-between align-items-center">
          <h4>Countries</h4>
          <div className="d-none d-md-block">
            {" "}
            <FilterTabs
              option={tabs}
              activeTab={activeTab}
              change={(e) => {
                setVisibleCount(10);
                setActiveTab(e);
                setFilterCountries(
                  e !== "All"
                    ? countries?.filter((item) => item.region === e)
                    : countries
                );
              }}
            />
          </div>
          <div className="d-md-none">
            <Dropdown align="end">
              <Dropdown.Toggle
                as="span"
                style={{ cursor: "pointer" }}
                id="dropdown-custom"
              >
                <MdOutlineMenu size={24} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {tabs.map((tab) => (
                  <Dropdown.Item
                    key={tab}
                    active={tab === activeTab}
                    onClick={() => {
                      setActiveTab(tab);
                      setFilterCountries(
                        tab !== "All"
                          ? countries?.filter((item) => item.region === tab)
                          : countries
                      );
                    }}
                  >
                    {tab}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <>
          <Row className="d-none d-md-flex justify-content-center align-items-center py-3">
            <Col md="4">
              <div
                style={{
                  borderTop: "3px solid #333",
                  width: "100%",
                  height: 20,
                }}
              />
            </Col>
            <Col md="auto">
              <h4 style={{ fontWeight: "bold", margin: 0 }}>WELCOME</h4>
            </Col>
            <Col md="4">
              <div
                style={{
                  borderBottom: "3px solid #333",
                  width: "100%",
                  height: 20,
                }}
              />
            </Col>
          </Row>

          <div className="d-block d-md-none text-center py-3">
            <div style={{ borderBottom: "3px solid #333", width: "100%" }} />
            <h4 style={{ fontWeight: "bold", margin: "10px 0" }}>WELCOME</h4>
            <div style={{ borderBottom: "3px solid #333", width: "100%" }} />
          </div>
        </>

        {/* <Row className="d-flex justify-content-center align-items-center py-3">
          <Col xs="4">
            <div style={{ borderBottom: "2px solid #333", width: "100%" }} />
          </Col>
          <Col xs="auto">
            <h4 style={{ fontWeight: "bold", margin: 0 }}>WELCOME</h4>
          </Col>
          <Col xs="4">
            <div style={{ borderBottom: "2px solid #333", width: "100%" }} />
          </Col>
        </Row> */}

        <Row className="align-items-stretch">
          <Col
            xs={12}
            md={8}
            order={{ xs: 2, md: 1 }}
            className="d-md-block d-none"
          >
            <CustomCarousel />
          </Col>
          <Col xs={12} md={4} order={{ xs: 1, md: 2 }}>
            <Image
              src={image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Col>

          <Col
            xs={12}
            md={8}
            order={{ xs: 2, md: 1 }}
            className=" d-md-none pt-4"
          >
            <CustomCarousel />
          </Col>
        </Row>

        {/* 
        <Row className="">
          <Col sm={8}>
            <CustomCarousel />
          </Col>
          <Col sm={4}>
            <Image
              src={image}
              rounded
              style={{ width: "100%", height: "100%", objectFit: "" }}
            />
          </Col>
        </Row> */}

        <Row className="py-4 " style={{ width: "100%" }}>
          {filterCountries?.slice(0, visibleCount).map((each, i) => (
            <Col md={6} key={i} className=" position-relative my-3">
              <CardBasic
                Title={each.name}
                description={each.region}
                image={each.flag}
              />
              <div className="shadow-layer position-absolute"></div>
            </Col>
          ))}
        </Row>
        {visibleCount <= filterCountries.length ? (
          <div className=" d-flex justify-content-center py-2">
            <Button
              variant="primary"
              style={{ width: "fit-content" }}
              onClick={() => {
                handleLoadMore();
              }}
            >
              Load more
            </Button>
          </div>
        ) : null}

        <Row className="py-4 justify-content-center gap-3">
          <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
            {socialMedia?.map((each) => (
              <div
                key={each.id}
                className="icon-wrapper d-flex justify-content-center align-items-center"
              >
                {each.icon}
              </div>
            ))}
          </div>

          <p className="d-flex justify-content-center align-items-center mb-0 fw-bolder text-secondary footerText">
            Employee@email.com
          </p>
          <p className="d-flex justify-content-center align-items-center  fw-bolder text-secondary footerText">
            Copyright 2020 Name. All rightsreserved.
          </p>
        </Row>
      </Row>
    </Container>
  );
}
