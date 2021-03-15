import React from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
function PostPostModal() {
  return (
    <AddPinModal>
      <AddPinContainer>
        <LeftSide>
          <Section1>
            <Iconsection1Container>
              <IconButton>
                <AddIcon />
              </IconButton>
            </Iconsection1Container>
          </Section1>
          <Section2>
            <label htmlFor="upload_img" id="upload_img_label">
              <UploadImageContainer>
                <DotedBorder>
                  <Iconsection2Container>
                    <IconButton>
                      <ArrowUpwardIcon />
                    </IconButton>
                  </Iconsection2Container>
                  <div>Click to upload</div>
                  <div>
                    Recommendation: Use high-quality .jpg less than 20MB
                  </div>
                </DotedBorder>
              </UploadImageContainer>
              <input
                type="file"
                name="upload_img"
                id="upload_img"
                value=""
              ></input>
            </label>
            <ModalPin>
              <PinImage>
                <img onLoad="" src="" alt="pin_image" />
              </PinImage>
            </ModalPin>
          </Section2>
          <Section3>
            <SaveFromSite>Save from site</SaveFromSite>
          </Section3>
        </LeftSide>
        <RightSide>
          <RSection1>
            <SelectSize>
              <select defaultValue="Select" name="pin_size" id="pin_size">
                <option value="">Select</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
              <SavePin>Save</SavePin>
            </SelectSize>
          </RSection1>
          <RSection2>
            <input
              placeholder="Add your title"
              type="text"
              className="new_pin_input"
              id="pin_title"
            />
            <Userdetails>
              <img
                src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                alt=""
              ></img>
              <span>Username</span>
            </Userdetails>
            <input
              placeholder="Tell everyone what your Pin is about"
              type="text"
              className="new_pin_input"
              id="pin_description"
            />
            <input
              placeholder="Add a destination link"
              type="text"
              className="new_pin_input"
              id="pin_destination"
            />
          </RSection2>
        </RightSide>
      </AddPinContainer>
    </AddPinModal>
  );
}
export default PostPostModal;
const AddPinModal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;

  background-color: rgba(0, 0, 0, 0.5);
`;
const AddPinContainer = styled.div`
  padding: 35px;
  width: 880px;
  height: 674px;
  border-radius: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  display: flex;

  background-color: white;
`;
const Side = styled.div`
  padding: 20px;
  width: 50%;
  height: 100%;
`;
const LeftSide = styled.div`
  padding: 20px;
  width: 50%;
  height: 100%;
`;
const RightSide = styled.div`
  padding: 20px;
  width: 50%;
  height: 100%;
`;
const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: #f0f0f0;
  cursor: pointer;
`;
const Iconsection1Container = styled(IconContainer)`
  width: 40px;
  height: 40px;

  background-color: rgba(239, 239, 239, 0);
  transition-duration: 0.3s;
  :hover {
    background-color: rgba(239, 239, 239, 1);
  }
`;
const Iconsection2Container = styled(IconContainer)`
  background-color: #767676;
`;
const Section1 = styled.div`
  width: 100%;
  height: 8%;
`;
const Section2 = styled.div`
  padding: 0px 10px;
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  input {
    width: 0;
    height: 0;
    opacity: 0;
  }
`;
const Section3 = styled.div`
  width: 100%;
  height: 12%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadImageContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 8px;

  background-color: #efefef;
`;
const DotedBorder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 2px dashed #dadada;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const ModalPin = styled.div`
  width: 252px;
  height: 512px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: none;
`;
const PinImage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SaveFromSite = styled.div`
  width: 340px;
  height: 48px;
  border-radius: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;

  background-color: #efefef;
  cursor: pointer;
`;
const RSection1 = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const SelectSize = styled.div`
  width: 236px;
  height: 40px;

  display: flex;

  select {
    width: 70%;
    height: 100%;
    border: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    outline: none;
    cursor: pointer;
    font-size: 16px;

    background-color: #efefef;
  }
`;
const SavePin = styled.div`
  width: 30%;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 700;

  color: white;
  background-color: #e60023;
  cursor: pointer;
`;
const RSection2 = styled.div`
  padding: 0px 10px;
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  input {
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 2px solid #c6c6c6;
    outline: none;

    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
  }
`;
const Userdetails = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 48px;
    width: 48px;
    background-color: #111111;
    border-radius: 50%;
    align-items: start;
    object-fit: cover;
    overflow: hidden;
  }
  span {
    font-weight: 700;
    font-size: 14px;
    margin-left: 10px;
  }
`;