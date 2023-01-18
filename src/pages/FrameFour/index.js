import React, { useState, useEffect } from "react";

import { Stack, Text, Button, Img, List, Line, Input } from "components";
import axios from "axios";

const FrameFourPage = () => {
  // form states
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  // retrived data state
  const [data, setData] = useState([]);

  // submit event
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(name, age, designation, salary);

    // our object to pass
    const data = {
      name,
      company,
      email,
      number
    };
    axios
      .post(
        "https://sheet.best/api/sheets/0c0eba8f-3ffd-4f8a-9f00-c64dcf49a096",
        data
      )
      .then(response => {
        // console.log(response);
        setName("");
        setCompany("");
        setEmail("");
        setNumber("");
      });
  };

  // getting data function
  const getData = () => {
    axios
      .get("https://sheet.best/api/sheets/e7a8bead-e947-4de5-9421-8e17433a3fff")
      .then(response => {
        setData(response.data);
      });
  };

  // triggering function
  useEffect(() => {
    getData();
  }, [data]);

  return (
    <>
      <div className="flex flex-col font-overpass items-center justify-start mx-[auto] w-[100%]">
        {/* <header className="w-[100%]">
          <Stack className="bg-white_A700 h-[72px] relative w-[100%]">
            <div className="absolute bg-white_A700 bottom-[1%] sm:h-[35px] md:h-[45px] h-[71px] w-[100%]"></div>
            <div className="absolute border-0 border-gray_100 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:pl-[3px] md:pl-[4px] pl-[8px] sm:py-[3px] md:py-[4px] py-[8px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                <div className="border-0 border-gray_100 border-none flex flex-col h-[50px] items-stretch justify-around sm:mx-[0] p-[0] md:px-[4px] sm:w-[100%] w-[52%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%] common-row-list">
                    <ul className="flex flex-row items-center justify-end">
                      <li className="w-[17%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex">
                        <div className="flex flex-col items-center justify-start p-[13px] sm:p-[6px] md:p-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer my-[3px] text-bluegray_900 w-[auto]"
                            variant="body3"
                            rel="noreferrer"
                          >
                            Solutions
                          </a>
                        </div>
                      </li>
                      <li className="w-[auto] mt-[16px] mb-[18px] ml-[14px] sm:ml-[6px] sm:w-[100%] sm:my-[10px] md:ml-[8px] md:mb-[11px] md:mt-[9px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-bold text-[17.31px] text-bluegray_900"
                          rel="noreferrer"
                        >
                          Features & Customization
                        </a>
                      </li>
                      <li className="w-[18%] ml-[12px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[7px] flex-col flex">
                        <div className="flex flex-col items-center justify-start p-[13px] sm:p-[6px] md:p-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer my-[3px] text-bluegray_900 w-[auto]"
                            variant="body3"
                            rel="noreferrer"
                          >
                            Use Cases
                          </a>
                        </div>
                      </li>
                      <li className="w-[13%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex">
                        <div className="flex flex-col items-center justify-start p-[13px] sm:p-[6px] md:p-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer my-[3px] text-bluegray_900 w-[auto]"
                            variant="body3"
                            rel="noreferrer"
                          >
                            About
                          </a>
                        </div>
                      </li>
                      <li className="w-[auto] ml-[14px] sm:ml-[6px] sm:w-[100%] sm:my-[10px] md:ml-[8px] md:my-[10px] my-[17px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-bold text-[17.31px] text-bluegray_900"
                          rel="noreferrer"
                        >
                          Get a Quote
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-end mt-[1px] sm:mx-[0] md:p-[5px] p-[9px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[38%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end mr-[14px] md:mr-[8px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                    <a href="#contactUs">
                      <Button
                        className="cursor-pointer font-normal min-w-[48%] not-italic text-[12.03px] text-center text-indigo_A700 uppercase w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineIndigoA700"
                      >
                        Request Demo
                      </Button>
                    </a>
                    <a href="#contactUs">
                      <Button
                        className="cursor-pointer font-normal min-w-[50%] sm:ml-[3px] md:ml-[4px] ml-[8px] not-italic text-[12.03px] text-center text-white_A700 uppercase w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                      >
                        Start an order
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Stack>
        </header> */}
        <div className="flex flex-col justify-start w-[100%]">
          <div className="bg-deep_purple_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[60px] p-[98px] w-[100%]">
            <div className="flex flex-col items-center justify-start max-w-[841px] mb-[102px] sm:mb-[49px] md:mb-[63px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <Text
                  className="leading-[52.80px] md:leading-[normal] sm:leading-[normal] text-center text-yellow_A700 w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Easemyexpo the ultimate platform for booking stall spaces,
                  designing stalls, and gifting solutions.
                </Text>
                <Text
                  className="leading-[21.12px] md:leading-[normal] sm:leading-[normal] sm:mt-[19px] md:mt-[25px] mt-[41px] sm:mx-[0] text-center text-white_A700 tracking-ls1 sm:w-[100%] w-[85%]"
                  variant="body2"
                >
                  Our platform has been designed to make the process of booking
                  stall spaces, designing stalls, and gifting solutions easy and
                  efficient.
                </Text>
                <a href="#contactUs">
                  <div className="flex flex-col items-center justify-start sm:mt-[19px] md:mt-[25px] mt-[41px] sm:mx-[0] sm:pb-[23px] md:pb-[29px] pb-[48px] sm:px-[15px] md:px-[29px] px-[48px] sm:w-[100%] w-[67%]">
                    <Button
                      className="cursor-pointer font-normal min-w-[44%] not-italic text-[13.2px] text-center text-white_A700 w-[max-content]"
                      shape="RoundedBorder7"
                      style={{
                        backgroundColor: "#b8b815",
                        color: "black",
                        fontWeight: "bold"
                      }}
                    >
                      START AN ORDER
                    </Button>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-blue_100 flex flex-col justify-start sm:p-[15px] md:p-[29px] p-[48px] w-[100%]">
            <div className="flex flex-col items-center justify-start max-w-[1110px] sm:mb-[47px] md:mb-[61px] mb-[99px] md:ml-[94px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Exhibitions just got easier here is How ?
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[46px] md:mt-[59px] mt-[96px] w-[100%]">
                  <div className="flex flex-col items-center sm:mx-[0] p-[3px] sm:px-[0] sm:w-[100%] w-[25%]">
                    <Img
                      src="images/img_6569f151274a4.png"
                      className="max-w-[100%] md:mt-[10px] mt-[17px] sm:mt-[8px] sm:w-[100%] w-[80%]"
                      alt="6569f151274aFour"
                    />
                    <Text
                      className="font-bold sm:mt-[22px] md:mt-[29px] mt-[47px] text-bluegray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Convenient
                    </Text>
                    <Text
                      className="font-normal leading-[25.92px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[20px] sm:mt-[9px] sm:mx-[0] not-italic text-black_900 text-center tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[89%]"
                      variant="body1"
                    >
                      "Booking your perfect stall space has been easier with
                      Easemyexpo"
                    </Text>
                    <Text
                      className="font-bold md:mt-[12px] mt-[20px] sm:mt-[9px] text-indigo_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls3 uppercase w-[auto]"
                      variant="body1"
                    >
                      LEARN MORE
                    </Text>
                  </div>
                  <div className="flex flex-col items-center sm:mx-[0] md:p-[12px] p-[20px] sm:px-[15px] sm:py-[9px] sm:w-[100%] w-[25%]">
                    <Img
                      src="images/img_39b904f6f2164.png"
                      className="max-w-[100%] mt-[1px] sm:w-[100%] w-[91%]"
                      alt="39b904f6f2164"
                    />
                    <div className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[9px] sm:mt-[25px] md:mt-[32px] mt-[52px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        {" "}
                        Comprehensive
                      </Text>
                      <Text
                        className="font-normal leading-[25.92px] md:leading-[normal] sm:leading-[normal] mt-[14px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900 text-center tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body1"
                      >
                        Find the perfect vendor for your stall design needs with
                        Easemyexpo"
                      </Text>
                      <Text
                        className="font-bold sm:ml-[22px] md:ml-[29px] ml-[47px] md:mt-[12px] mt-[20px] sm:mt-[9px] text-indigo_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls3 uppercase w-[auto]"
                        variant="body1"
                      >
                        LEARN MORE
                      </Text>
                    </div>
                  </div>
                  <List
                    className="gap-[0] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[50%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-center justify-start sm:pb-[13px] md:pb-[18px] pb-[29px] sm:px-[15px] md:px-[18px] px-[29px] w-[100%]">
                      <Img
                        src="images/img_ce76d49723a94.png"
                        className="md:h-[128px] h-[205px] sm:h-[99px] max-w-[100%] md:w-[127px] w-[205px] sm:w-[98px]"
                        alt="ce76d49723aNinetyFour"
                      />
                      <Text
                        className="font-bold sm:mt-[12px] md:mt-[16px] mt-[26px] text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Curated
                      </Text>
                      <Text
                        className="font-normal leading-[25.92px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[20px] sm:mt-[9px] sm:mx-[0] not-italic text-black_900 text-center tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[98%]"
                        variant="body1"
                      >
                        Elevate your exhibition game with our curated gifting
                        options"
                      </Text>
                      <Text
                        className="font-bold md:mt-[12px] mt-[20px] sm:mt-[9px] text-indigo_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls3 uppercase w-[auto]"
                        variant="body1"
                      >
                        LEARN MORE
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[3px] sm:px-[0] px-[3px] w-[100%]">
                      <Img
                        src="images/img_a0442e329d2b4.png"
                        className="md:h-[128px] h-[205px] sm:h-[99px] max-w-[100%] md:w-[127px] w-[205px] sm:w-[98px]"
                        alt="a0442e329d2bFour"
                      />
                      <Text
                        className="font-bold sm:mt-[12px] md:mt-[16px] mt-[26px] text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Lasting
                      </Text>
                      <Text
                        className="font-normal leading-[25.92px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[20px] sm:mt-[9px] sm:mx-[0] not-italic text-black_900 text-center tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[84%]"
                        variant="body1"
                      >
                        Because every successful exhibition starts with the
                        perfect stall and gifts
                      </Text>
                      <Text
                        className="font-bold md:mt-[12px] mt-[20px] sm:mt-[9px] text-indigo_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls3 uppercase w-[auto]"
                        variant="body1"
                      >
                        LEARN MORE
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo_50 flex flex-col justify-start mt-[1px] w-[100%]">
            <div className="flex flex-col items-center justify-start max-w-[1512px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                <div className="flex flex-col sm:mx-[0] md:p-[29px] p-[48px] sm:px-[15px] sm:py-[23px] sm:w-[100%] w-[50%]">
                  <Text
                    className="leading-[74.64px] md:leading-[normal] sm:leading-[normal] ml-[14px] md:ml-[8px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[77%]"
                    as="h1"
                    variant="h1"
                  >
                    Want something else?
                  </Text>
                  <Text
                    className="font-normal leading-[25.92px] md:leading-[normal] sm:leading-[normal] ml-[14px] md:ml-[8px] mt-[16px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] not-italic text-bluegray_900 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[90%]"
                    variant="body1"
                  >
                    Stall booking, vendor sourcing, and custom gift hamper
                    solutions. Let's make your next event a success, schedule a
                    call now.
                  </Text>
                  <a href="#contactUs">
                    <Button
                      className="cursor-pointer font-bold mb-[1px] min-w-[46%] ml-[14px] sm:ml-[6px] md:ml-[8px] sm:mt-[11px] md:mt-[14px] mt-[24px] text-[18.92px] text-center text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls3 uppercase w-[max-content]"
                      shape="RoundedBorder9"
                    >
                      SHARE DETAILS
                    </Button>
                  </a>
                </div>
                <Img
                  src="images/img_b1db353e13334.png"
                  className="max-w-[100%] sm:w-[100%] w-[50%]"
                  alt="b1db353e13334"
                />
              </div>
            </div>
          </div>
          <div
            id="howItWorks"
            className="flex flex-col items-center justify-start max-w-[1140px] md:ml-[115px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] md:py-[10px] py-[17px] sm:py-[8px] w-[100%]"
          >
            <div className="flex flex-col items-center justify-start sm:mb-[11px] md:mb-[14px] mb-[23px] w-[100%]">
              <Text className="text-bluegray_900 w-[auto]" as="h2" variant="h2">
                How it works
              </Text>
              <div className="Brand-circle flex flex-col h-[126px] sm:h-[61px] md:h-[79px] items-center  sm:mt-[23px] md:mt-[29px] mt-[48px] rounded-radius50 w-[126px] sm:w-[60px] md:w-[78px]">
                {/* <Img
                  src="images/img_4b8115d50f7c4.png"
                  className="h-[126px] sm:h-[61px] md:h-[79px] rounded-radius50 w-[100%]"
                  alt="4b8115d50f7cFour"
                /> */}
                <div
                  >Brand</div>
              </div>
              <Text
                className="font-bold sm:mt-[11px] md:mt-[14px] mt-[23px] text-bluegray_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                How do we work?
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[19px] md:mt-[24px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                <Img
                  src="images/img_curveleft7052.png"
                  className="max-w-[100%] sm:w-[100%] w-[49%]"
                  alt="curveleft7052"
                />
                <Line className="bg-indigo_A700 sm:h-[46px] md:h-[60px] h-[95px] sm:ml-[3px] md:ml-[4px] ml-[8px] w-[3px]" />
                <Img
                  src="images/img_curverightf23.png"
                  className="max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[8px] sm:w-[100%] w-[49%]"
                  alt="curverightfTwentyThree"
                />
              </div>
              <Text
                className="font-bold mt-[15px] sm:mt-[7px] md:mt-[9px] text-bluegray_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Find your right exhibition and niche
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[16px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                <div className="border-bw3 border-dashed border-indigo_A700 sm:h-[24px] md:h-[30px] h-[48px] w-[1%]"></div>
                <div className="border-bw3 border-dashed border-indigo_A700 sm:h-[24px] md:h-[30px] h-[48px] w-[1%]"></div>
                <div className="border-bw3 border-dashed border-indigo_A700 sm:h-[24px] md:h-[30px] h-[48px] w-[1%]"></div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[7px] md:mt-[9px] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:pl-[10px] sm:pl-[15px] pl-[17px] md:py-[10px] py-[17px] sm:py-[8px] w-[100%]">
                  <Text
                    className="font-bold leading-[41.60px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] sm:my-[12px] md:my-[15px] my-[25px] text-black_900 text-center sm:w-[100%] w-[28%]"
                    as="h4"
                    variant="h4"
                  >
                    Booking Stalls: <br />
                    Simplify the process
                  </Text>
                  <Text
                    className="font-bold leading-[41.60px] md:leading-[normal] sm:leading-[normal] md:ml-[20px] ml-[33px] sm:mt-[12px] md:mt-[15px] mt-[25px] sm:mx-[0] text-black_900 text-center sm:w-[100%] w-[30%]"
                    as="h4"
                    variant="h4"
                  >
                    Vendor Sourcing: <br />
                    Streamline the search
                  </Text>
                  <Text
                    className="font-bold leading-[41.60px] md:leading-[normal] sm:leading-[normal] sm:mt-[35px] md:mt-[46px] mt-[74px] sm:mx-[0] text-black_900 text-center sm:w-[100%] w-[34%]"
                    as="h4"
                    variant="h4"
                  >
                    Gifting Solutions: <br />
                    Choose the perfect goodies
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[16px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                  <div className="border-bw3 border-dashed border-indigo_A700 sm:h-[24px] md:h-[30px] h-[48px] w-[1%]"></div>
                  <div className="border-bw3 border-dashed border-indigo_A700 sm:h-[24px] md:h-[30px] h-[48px] w-[1%]"></div>
                  <div className="border-bw3 border-dashed border-indigo_A700 sm:h-[24px] md:h-[30px] h-[48px] w-[1%]"></div>
                </div>
                <Text
                  className="font-bold mt-[15px] sm:mt-[7px] md:mt-[9px] text-bluegray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Building perfect exhibitions and stalls for our clients in
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[16px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                  <div className="border-bw3 border-dashed border-indigo_A700 sm:h-[24px] md:h-[30px] h-[48px] w-[1%]"></div>
                  <div className="border-bw3 border-dashed border-indigo_A700 sm:h-[24px] md:h-[30px] h-[48px] w-[1%]"></div>
                  <div className="border-bw3 border-dashed border-indigo_A700 sm:h-[24px] md:h-[30px] h-[48px] w-[1%]"></div>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[16px] sm:mt-[7px] md:mt-[9px] w-[100%]">
                  <div className="flex flex-col items-center sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[6px] sm:px-[0] md:px-[3px] px-[6px] sm:w-[100%] w-[34%]">
                    <Img
                      src="images/img_ccb17b8db2a14.png"
                      className="max-w-[100%] sm:w-[100%] w-[71%]"
                      alt="ccb17b8db2aFourteen"
                    />
                    <Text
                      className="font-normal sm:mt-[15px] md:mt-[19px] mt-[32px] not-italic text-gray_900 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Aman in Mumbai
                    </Text>
                  </div>
                  <div className="flex flex-col items-center sm:mx-[0] pb-[1px] sm:px-[0] px-[1px] sm:w-[100%] w-[34%]">
                    <Img
           src="images/img_ccb17b8db2a14.png"
                      className="max-w-[100%] sm:w-[100%] w-[69%]"
                      alt="8a88b9db89eaFour"
                    />
                    <Text
                      className="font-normal sm:mt-[15px] md:mt-[19px] mt-[32px] not-italic text-gray_900 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Ansh in Bangalore
                    </Text>
                  </div>
                  <div className="flex flex-col items-center sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[6px] sm:px-[0] md:px-[3px] px-[6px] sm:w-[100%] w-[34%]">
                    <Img
                   src="images/img_ccb17b8db2a14.png"
                      className="max-w-[100%] sm:w-[100%] w-[71%]"
                      alt="71ac0b56a0daFour"
                    />
                    <Text
                      className="font-normal sm:mt-[15px] md:mt-[19px] mt-[32px] not-italic text-gray_900 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Vishal in Kochi
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col justify-start mt-[1px] sm:p-[15px] md:p-[29px] p-[48px] w-[100%]">
            <div className="flex flex-col items-center justify-start max-w-[1140px] md:ml-[85px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col items-center justify-start p-[4px] w-[100%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Proudly supplying treats for
                </Text>
                <div className="flex flex-col items-center justify-start md:mb-[11px] mb-[19px] sm:mb-[9px] sm:mt-[25px] md:mt-[32px] mt-[52px] sm:mx-[0] md:p-[14px] p-[24px] sm:px-[15px] sm:py-[11px] sm:w-[100%] w-[99%]">
                  <List
                    className="sm:gap-[23px] md:gap-[29px] gap-[48px] grid sm:mb-[11px] md:mb-[14px] mb-[24px] min-h-[auto] sm:w-[100%] w-[99%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Img
                        src="images/img_b18b4fd8532f4.png"
                        className="max-w-[100%] w-[16%]"
                        alt="b18b4fd8532fFour"
                      />
                      <Img
                        src="images/img_0c5afc96cf384.png"
                        className="max-w-[100%] w-[16%]"
                        alt="0c5afc96cf384"
                      />
                      <Img
                        src="images/img_7d09b5de8cdc4.png"
                        className="max-w-[100%] w-[16%]"
                        alt="7d09b5de8cdcFour"
                      />
                      <Img
                        src="images/img_d5e356b217c24.png"
                        className="max-w-[100%] w-[16%]"
                        alt="d5e356b217cTwentyFour"
                      />
                      <Img
                        src="images/img_620a7b3a7dfb4.png"
                        className="max-w-[100%] w-[16%]"
                        alt="620a7b3a7dfbFour"
                      />
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Img
                        src="images/img_9ce826188c284.png"
                        className="max-w-[100%] w-[16%]"
                        alt="9ce826188c284"
                      />
                      <Img
                        src="images/img_a6e30d1ed61f4.png"
                        className="max-w-[100%] w-[16%]"
                        alt="a6e30d1ed61fFour"
                      />
                      <Img
                        src="images/img_e513d73742814.png"
                        className="max-w-[100%] w-[16%]"
                        alt="e513d73742814"
                      />
                      <Img
                        src="images/img_4d84af9f00474.png"
                        className="max-w-[100%] w-[16%]"
                        alt="4d84af9f00474"
                      />
                      <Img
                        src="images/img_00d2393520bc4.png"
                        className="max-w-[100%] w-[16%]"
                        alt="00d2393520bcFour"
                      />
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1210px] md:ml-[124px] ml-[auto] mr-[auto] md:mt-[11px] mt-[18px] sm:mt-[8px] sm:mx-[0] p-[4px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text className="text-bluegray_900 w-[auto]" as="h2" variant="h2">
              Literally everyone loves ‘em
            </Text>
            <div className="flex flex-col items-center justify-start md:mb-[10px] mb-[17px] sm:mb-[8px] sm:mt-[14px] md:mt-[18px] mt-[30px] sm:mx-[0] sm:px-[0] px-[12px] md:px-[7px] sm:w-[100%] w-[99%]">
              <List
                className="sm:gap-[14px] md:gap-[18px] gap-[29.31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-teal_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[18px] p-[29px] rounded-radius513 w-[100%]">
                  <div className="flex flex-col items-center justify-start sm:mb-[11px] md:mb-[14px] mb-[24px] sm:px-[0] w-[100%]">
                    <div className="flex flex-col justify-start pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_quote395491d4.png"
                        className="max-w-[100%] w-[7%]"
                        alt="quote395491dFour"
                      />
                      <Text
                        className="font-normal leading-[24.93px] md:leading-[normal] sm:leading-[normal] ml-[16px] md:ml-[9px] mr-[11px] md:mr-[6px] sm:mt-[12px] md:mt-[16px] mt-[26px] sm:mx-[0] not-italic text-gray_901 sm:w-[100%] w-[91%]"
                        variant="body4"
                      >
                        "The custom gift solutions provided by Easemyexpo helped
                        us leave a lasting impression on our visitors at the
                        exhibition."
                      </Text>
                    </div>
                    <div className="flex flex-col items-end justify-start sm:mt-[14px] md:mt-[19px] mt-[31px] w-[100%]">
                      <div className="flex flex-col justify-start p-[3px] w-[100%]">
                        <Text
                          className="font-normal ml-[12px] sm:ml-[5px] md:ml-[7px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          <span className="text-gray_900 text-[14.67px] font-overpass">
                            -{" "}
                          </span>
                          <span className="text-gray_901 text-[14.67px] font-overpass"></span>
                        </Text>
                        <Text
                          className="font-semibold mb-[4px] ml-[12px] sm:ml-[5px] md:ml-[7px] mt-[13px] sm:mt-[6px] md:mt-[8px] text-gray_901 tracking-ls1 uppercase w-[auto]"
                          variant="body4"
                        >
                          - An Indian Marketing Manager
                        </Text>
                      </div>
                      <Img
                        src="images/img_quote395491d4_17X21.png"
                        className="max-w-[100%] sm:mt-[11px] md:mt-[14px] mt-[23px] w-[7%]"
                        alt="quote395491dFour One"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-teal_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[18px] p-[29px] rounded-radius513 w-[100%]">
                  <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <div className="flex flex-col justify-start pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_quote395491d4.png"
                        className="max-w-[100%] w-[7%]"
                        alt="quote395491dFour One"
                      />
                      <Text
                        className="font-normal leading-[24.93px] md:leading-[normal] sm:leading-[normal] ml-[16px] md:ml-[9px] mr-[11px] md:mr-[6px] sm:mt-[12px] md:mt-[16px] mt-[26px] sm:mx-[0] not-italic text-gray_901 sm:w-[100%] w-[91%]"
                        variant="body4"
                      >
                        "Easemyexpo made the process of booking our stall at an
                        exhibition so much easier and stress-free."
                      </Text>
                    </div>
                    <div className="flex flex-col items-end justify-start sm:mt-[14px] md:mt-[19px] mt-[31px] w-[100%]">
                      <div className="flex flex-col justify-start p-[3px] w-[100%]">
                        <Text
                          className="font-normal ml-[12px] sm:ml-[5px] md:ml-[7px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          <span className="text-gray_900 text-[14.67px] font-overpass">
                            -{" "}
                          </span>
                          <span className="text-gray_901 text-[14.67px] font-overpass"></span>
                        </Text>
                        <Text
                          className="font-semibold mb-[4px] ml-[12px] sm:ml-[5px] md:ml-[7px] mt-[13px] sm:mt-[6px] md:mt-[8px] text-gray_901 tracking-ls1 uppercase w-[auto]"
                          variant="body4"
                        >
                          An Indian Business Owner.
                        </Text>
                      </div>
                      <Img
                        src="images/img_quote395491d4_17X21.png"
                        className="max-w-[100%] sm:mt-[11px] md:mt-[14px] mt-[23px] w-[7%]"
                        alt="quote395491dFour One One"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-teal_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[18px] p-[29px] rounded-radius513 w-[100%]">
                  <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <div className="flex flex-col justify-start pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_quote395491d4.png"
                        className="max-w-[100%] w-[7%]"
                        alt="quote395491dFour Two"
                      />
                      <Text
                        className="font-normal leading-[24.93px] md:leading-[normal] sm:leading-[normal] ml-[16px] md:ml-[9px] mr-[11px] md:mr-[6px] sm:mt-[12px] md:mt-[16px] mt-[26px] sm:mx-[0] not-italic text-gray_901 sm:w-[100%] w-[91%]"
                        variant="body4"
                      >
                        "We were able to find the perfect vendor for our stall
                        design needs thanks to Easemyexpo's comprehensive vendor
                        sourcing service."
                      </Text>
                    </div>
                    <div className="flex flex-col items-end justify-start sm:mt-[14px] md:mt-[19px] mt-[31px] w-[100%]">
                      <div className="flex flex-col justify-start p-[3px] w-[100%]">
                        <Text
                          className="font-normal ml-[12px] sm:ml-[5px] md:ml-[7px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          <span className="text-gray_900 text-[14.67px] font-overpass">
                            -{" "}
                          </span>
                          <span className="text-gray_901 text-[14.67px] font-overpass"></span>
                        </Text>
                        <Text
                          className="font-semibold mb-[4px] ml-[12px] sm:ml-[5px] md:ml-[7px] mt-[13px] sm:mt-[6px] md:mt-[8px] text-gray_901 tracking-ls1 uppercase w-[auto]"
                          variant="body4"
                        >
                          - An Indian Event Planner
                        </Text>
                      </div>
                      <Img
                        src="images/img_quote395491d4_17X21.png"
                        className="max-w-[100%] sm:mt-[11px] md:mt-[14px] mt-[23px] w-[7%]"
                        alt="quote395491dFour One Two"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-teal_A400 flex flex-col justify-start sm:p-[15px] md:p-[39px] p-[64px] w-[100%]">
            <div className="flex flex-col items-center justify-start max-w-[1125px] md:ml-[85px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:pr-[15px] md:pr-[18px] pr-[29px] w-[100%]">
                <Stack className="h-[57px] relative w-[26%]">
                  <div className="absolute bg-yellow_A700 bottom-[2%] sm:h-[14px] md:h-[18px] h-[28px] w-[100%]"></div>
                  <Text
                    className="absolute inset-x-[5%] text-bluegray_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Questions?
                  </Text>
                </Stack>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                  <Text
                    className="font-normal leading-[30.27px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-bluegray_900 sm:w-[100%] w-[55%]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_900 text-[25.23px] font-overpass sm:text-[21.23px] md:text-[23.23px]">
                      Email us at{" "}
                    </span>
                    <span className="text-bluegray_900 text-[25.23px] font-overpass font-bold sm:text-[21.23px] md:text-[23.23px]">
                      queries@easemyexpo.com
                    </span>
                    <span className="text-bluegray_900 text-[25.23px] font-overpass sm:text-[21.23px] md:text-[23.23px]">
                      , or
                    </span>
                  </Text>
                  {/* <a href="#contactUs">
                    {" "}
                    <Button
                      className="cursor-pointer font-bold min-w-[30%] sm:my-[2px] md:my-[3px] my-[5px] text-[14.67px] text-center text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls16699999570846558 uppercase w-[max-content]"
                      shape="RoundedBorder4"
                      size="md"
                    >
                      Book a call
                    </Button>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end max-w-[1512px] md:ml-[47px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] md:p-[11px] p-[19px] sm:pl-[15px] sm:pr-[15px] sm:px-[15px] sm:py-[9px] w-[100%]">
            <div className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[34px] sm:mx-[0] pl-[15px] md:pl-[9px] sm:px-[0] sm:w-[100%] w-[78%]">
              <Text className="text-bluegray_900 w-[auto]" as="h2" variant="h2">
                Press
              </Text>
              <List
                className="sm:gap-[23px] md:gap-[29px] gap-[48px] grid min-h-[auto] sm:mt-[25px] md:mt-[33px] mt-[54px] w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between pr-[15px] sm:pr-[7px] md:pr-[9px] w-[100%]">
                  <Stack className="border border-gray_200 border-solid h-[221px] p-[15px] sm:p-[7px] md:p-[9px] relative w-[23%]">
                    <Img
                      src="images/img_65cc042286144.png"
                      className="absolute h-[190px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[118px] w-[190px] sm:w-[91px]"
                      alt="65cc042286144"
                    />
                  </Stack>
                  <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                    <Text
                      className="font-bold text-bluegray_900 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 uppercase w-[auto]"
                      variant="body1"
                    >
                      Retail Brew
                    </Text>
                    <Text
                      className="font-bold mt-[10px] sm:mt-[4px] md:mt-[6px] text-gray_500 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 uppercase w-[auto]"
                      variant="body4"
                    >
                      Sep 2, 2022
                    </Text>
                    <Text
                      className="font-medium sm:mt-[15px] md:mt-[19px] mt-[32px] text-indigo_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      "Easemyexpo partners with top exhibition organizers"
                    </Text>
                    <div className="flex flex-col items-center justify-start sm:mt-[18px] md:mt-[24px] mt-[39px] w-[100%]">
                      <Text
                        className="font-normal leading-[25.92px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_900 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body1"
                      >
                        Easemyexpo, the one-stop-shop for all your exhibition
                        needs, announced today that it has partnered with top
                        exhibition organizers to expand the platform's reach and
                        offer more options for exhibitors to book stall spaces
                        and find vendors.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Stack className="border border-gray_200 border-solid h-[221px] p-[15px] sm:p-[7px] md:p-[9px] relative w-[23%]">
                    <Img
                      src="images/img_7a48a7b5f2854.png"
                      className="absolute h-[190px] inset-[0] justify-center m-[auto] max-w-[100%] md:w-[118px] w-[190px] sm:w-[91px]"
                      alt="7a48a7b5f2854"
                    />
                  </Stack>
                  <div className="flex flex-col sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[0] md:px-[4px] px-[7px] sm:w-[100%] w-[76%]">
                    <Text
                      className="font-bold md:ml-[10px] ml-[17px] sm:ml-[8px] text-bluegray_900 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 uppercase w-[auto]"
                      variant="body1"
                    >
                      SmartBrief
                    </Text>
                    <Text
                      className="font-bold md:ml-[10px] ml-[17px] sm:ml-[8px] mt-[10px] sm:mt-[4px] md:mt-[6px] text-gray_500 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 uppercase w-[auto]"
                      variant="body4"
                    >
                      Apr 21, 2022
                    </Text>
                    <Text
                      className="font-medium leading-[38.40px] md:leading-[normal] sm:leading-[normal] md:ml-[10px] ml-[17px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] text-indigo_A700 sm:w-[100%] w-[83%]"
                      as="h4"
                      variant="h4"
                    >
                      Easemyexpo Launches New Gifting Platform for Exhibitors
                    </Text>
                    <div className="flex flex-col items-center justify-end md:ml-[10px] ml-[17px] mt-[15px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Text
                        className="font-normal leading-[25.92px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[18px] sm:mt-[8px] not-italic text-bluegray_900 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body1"
                      >
                        Easemyexpo Launches New Gifting Platform for Exhibitors"
                        - Easemyexpo, the leading platform for booking stall
                        spaces at exhibitions and expos, has just announced the
                        launch of their new gifting platform for exhibitors.
                        This new platform allows exhibitors to easily create
                        memorable experiences for attendees by providing them
                        with goodie bags, corporate gifts, and more.
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <Text
              className="sm:mt-[26px] md:mt-[34px] mt-[55px] text-indigo_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls3 w-[auto]"
              as="h6"
              variant="h6"
            >
              GO TO ‘PRESS’
            </Text>
          </div>
          <div className="bg-bluegray_900 flex flex-col justify-end sm:p-[15px] md:p-[26px] p-[43px] w-[100%]">
            <div className="flex flex-col items-center justify-start max-w-[1140px] md:ml-[88px] ml-[auto] mr-[auto] sm:mt-[13px] md:mt-[18px] mt-[29px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col items-center justify-start p-[11px] sm:p-[5px] md:p-[6px] w-[100%]">
                <Text
                  className="font-bold text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Resolve order queries, Send us an e-mail
                </Text>
                <a href="mailto:queries@easemyexpo.com">
                  {" "}
                  <Button className="cursor-pointer font-bold sm:mb-[10px] md:mb-[13px] mb-[21px] min-w-[23%] sm:mt-[21px] md:mt-[27px] mt-[44px] text-[18.92px] text-center text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls3 uppercase w-[max-content]">
                    SEND MAIL
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col justify-end max-w-[1581px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[45px] p-[73px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            style={{ backgroundImage: "url('images/defaultNoData.jpeg')" }}
          >
            <div className="flex flex-col items-center justify-start ml-[112px] md:ml-[69px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <div
                  id="contactUs"
                  className="flex flex-col sm:mx-[0] p-[15px] md:p-[9px] sm:px-[0] sm:py-[7px] sm:w-[100%] w-[52%]"
                >
                  <Text
                    className="md:mt-[11px] mt-[18px] sm:mt-[8px] text-bluegray_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Contact Us
                  </Text>
                  <Text
                    className="font-normal leading-[25.92px] md:leading-[normal] sm:leading-[normal] sm:mb-[213px] md:mb-[276px] mb-[444px] sm:mt-[13px] md:mt-[18px] mt-[29px] sm:mx-[0] not-italic text-gray_900 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[94%]"
                    variant="body1"
                  >
                    Fill out these details and we will get in touch with you for
                    your requirement.
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col items-center mb-[1px] mt-[14px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:p-[15px] md:p-[17px] p-[28px] rounded-radius513 shadow-bs sm:w-[100%] w-[45%]">
                  <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-start mb-[1px] sm:px-[0] w-[100%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 tracking-ls1 uppercase w-[auto]"
                          variant="body4"
                        >
                          Name*
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[14.67px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                          wrapClassName="md:mt-[7px] mt-[12px] sm:mt-[5px] w-[100%]"
                          name="inputfirstname"
                          placeholder="John"
                          size="sm"
                          onChange={e => setName(e.target.value)}
                          value={name}
                        ></Input>
                      </div>

                      <div className="flex flex-col justify-start sm:mt-[18px] md:mt-[24px] mt-[39px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 tracking-ls1 uppercase w-[auto]"
                          variant="body4"
                        >
                          Company*
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[14.67px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                          wrapClassName="md:mt-[7px] mt-[12px] sm:mt-[5px] w-[100%]"
                          name="inputlastname One"
                          placeholder="Joe"
                          size="sm"
                          onChange={e => setCompany(e.target.value)}
                          value={company}
                        ></Input>
                      </div>
                      <div className="flex flex-col justify-start sm:mt-[19px] md:mt-[24px] mt-[40px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 tracking-ls1 uppercase w-[auto]"
                          variant="body4"
                        >
                          Email*
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[14.67px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                          wrapClassName="md:mt-[7px] mt-[12px] sm:mt-[5px] w-[100%]"
                          type="email"
                          name="email One"
                          placeholder="john.joe@abc.com"
                          size="md"
                          onChange={e => setEmail(e.target.value)}
                          value={email}
                        ></Input>
                      </div>
                      <div className="flex flex-col justify-start md:mt-[12px] mt-[20px] sm:mt-[9px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 tracking-ls1 uppercase w-[auto]"
                          variant="body4"
                        >
                          Mobile phone number*
                        </Text>
                        <Input
                          className="w-[100%]"
                          wrapClassName="flex h-[41px] md:mt-[7px] mt-[12px] sm:mt-[5px] w-[100%]"
                          name="inputmobilepho"
                          placeholder=""
                          onChange={e => setNumber(e.target.value)}
                          value={number}
                        ></Input>
                      </div>
                      <Button
                        className="cursor-pointer font-bold min-w-[100%] sm:mt-[13px] md:mt-[18px] mt-[29px] text-[19.07px] text-center text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 uppercase w-[max-content]"
                        shape="RoundedBorder9"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-bluegray_900 flex flex-col items-center justify-start max-w-[1578px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:p-[15px] md:p-[33px] p-[54px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
            <div className="flex flex-col items-center justify-start sm:mb-[34px] md:mb-[44px] mb-[71px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
              <div className="flex flex-col justify-start w-[100%]">
                <Text
                  className="font-bold text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  "Easemyexpo: Streamlining your exhibition journey with
                  one-stop stall booking, vendor sourcing, and gifting
                  solutions"
                </Text>
                <Text
                  className="font-normal sm:ml-[23px] md:ml-[29px] ml-[48px] sm:mt-[23px] md:mt-[29px] mt-[48px] not-italic text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Easemyexpo, bridging the gap between brands and their customers through personalized exhibition experiences.
                </Text>
                <a href="#contactUs">
                  {" "}
                  <Button className="cursor-pointer font-bold min-w-[26%] sm:ml-[152px] md:ml-[196px] ml-[316px] sm:mr-[200px] md:mr-[258px] mr-[416px] sm:mt-[15px] md:mt-[20px] mt-[33px] text-[18.92px] text-center text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls3 uppercase w-[max-content]">
                    Lets Conect
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameFourPage;
