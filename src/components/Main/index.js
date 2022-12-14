import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import DropIcon from "../Main/Img/dropIcon.svg";
import MainAgain from "./MainAgain";

const Contain = styled.div`
  width: 1194px;
  height: 1000px;
  position: relative;
  left: 50%;
  margin-top: 80px;
  margin-left: -597px;
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));
`;

const Circle = styled.div`
  width: 346px;
  height: 346px;
  margin-top: 111px;
  margin-left: 40px;
  border-radius: 100%;
  background-color: #c8e1ff;
  position: absolute;
  ${(props) =>
    props.pink &&
    css`
      width: 81px;
      height: 81px;
      margin-top: 412px;
      margin-left: 102px;
      background-color: #ffc8f9;
    `}
  ${(props) =>
    props.aqua &&
    css`
      width: 133px;
      height: 133px;
      margin-top: 622px;
      margin-left: 272px;
      background-color: #bcf7f3;
    `}
    ${(props) =>
    props.green &&
    css`
      width: 153px;
      height: 153px;
      margin-top: 401px;
      margin-left: 574px;
      background-color: #c8e9a7;
    `}
    ${(props) =>
    props.red &&
    css`
      width: 207px;
      height: 207px;
      margin-top: 718px;
      margin-left: 724px;
      background-color: #ffaaaa;
    `}
    ${(props) =>
    props.yellow &&
    css`
      width: 265px;
      height: 265px;
      margin-top: 224px;
      margin-left: 929px;
      background-color: #f5d29c;
    `}
`;

const DropzoneContain = styled.div`
  width: 846px;
  height: 578px;
  border-radius: 20px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
`;

const InputContain = styled.div`
  width: 400;
  height: 184px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
`;

const Inputprops = styled.input``;

const InputText = styled.p`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #444444;
`;

const InputLogoContain = styled.img`
  width: 55px;
  height: 55px;
  margin: auto;
  margin-top: 100px;
`;

const SelectButton = styled.button`
  width: 185px;
  height: 65px;
  border: 0;
  outline: 0;
  top: 40%;
  left: 26%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px 30px;
  position: relative;
  border-radius: 100px;
  background-color: #1a73e8;
`;

const SelectText = styled.p`
  cursor: pointer;
  margin: auto;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Main = (props) => {
  const [change, setChange] = useState(false);
  const { t } = useTranslation("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      setChange(!change);
    },
    [change]
  );

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: {
      "video/*": [],
    },
  });

  const files = acceptedFiles.map((file) => (
    <h2 key={file.path}>{file.path}</h2>
  ));

  return (
    <div>
      {change ? (
        <MainAgain files={files} />
      ) : (
        <Contain>
          <Circle />
          <Circle pink />
          <Circle aqua />
          <Circle green />
          <Circle red />
          <Circle yellow />
          <DropzoneContain {...getRootProps({ className: "dropzone" })}>
            <InputContain>
              <Inputprops {...getInputProps()} />
              <InputText>{t("mainPage1")}</InputText>
              <InputLogoContain src={DropIcon} alt="dropIcon" />
              <SelectButton>
                <SelectText onClick={open}>{t("mainPage2")} </SelectText>
              </SelectButton>
            </InputContain>
          </DropzoneContain>
        </Contain>
      )}
    </div>
  );
};

export default Main;
