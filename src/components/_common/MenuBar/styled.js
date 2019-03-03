import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1410px;
  max-height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ImageWrapper = styled.div`
  /* cursor: pointer; */
`

export const InfoBlocks = styled.div`
  width: 30%;
  max-height: 46px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Block = styled.div`
  display: flex;
  align-items: center;
  align-text: center;
`

export const BlockText = styled.span`
  margin-left: 10px;
`

export const Image = styled.span`
  width: 40px;
  height: 25px;
  background-repeat: no-repeat;
  background-size: 85% auto;
  background-position: center;
`

export const MailImage = styled(Image)`
  background-image: url('data:image/svg+xml,%3C%3Fxml version="1.0" encoding="iso-8859-1"%3F%3E%3C!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 14" style="enable-background:new 0 0 14 14;" xml:space="preserve"%3E%3Cg%3E%3Cg%3E%3Cpath style="fill:%23030104;" d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986 c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z"/%3E%3Cpath style="fill:%23030104;" d="M13.684,2.271C13.504,2.103,13.262,2,12.993,2H1.007C0.74,2,0.498,2.104,0.318,2.273L7,8 L13.684,2.271z"/%3E%3Cpolygon style="fill:%23030104;" points="0,2.878 0,11.186 4.833,7.079 "/%3E%3Cpolygon style="fill:%23030104;" points="9.167,7.079 14,11.186 14,2.875 "/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
`

export const PhoneImage = styled(Image)`
  background-image: url('data:image/svg+xml,%3C%3Fxml version="1.0" encoding="iso-8859-1"%3F%3E%3C!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480.56 480.56" style="enable-background:new 0 0 480.56 480.56;" xml:space="preserve"%3E%3Cg%3E%3Cg%3E%3Cpath d="M365.354,317.9c-15.7-15.5-35.3-15.5-50.9,0c-11.9,11.8-23.8,23.6-35.5,35.6c-3.2,3.3-5.9,4-9.8,1.8 c-7.7-4.2-15.9-7.6-23.3-12.2c-34.5-21.7-63.4-49.6-89-81c-12.7-15.6-24-32.3-31.9-51.1c-1.6-3.8-1.3-6.3,1.8-9.4 c11.9-11.5,23.5-23.3,35.2-35.1c16.3-16.4,16.3-35.6-0.1-52.1c-9.3-9.4-18.6-18.6-27.9-28c-9.6-9.6-19.1-19.3-28.8-28.8 c-15.7-15.3-35.3-15.3-50.9,0.1c-12,11.8-23.5,23.9-35.7,35.5c-11.3,10.7-17,23.8-18.2,39.1c-1.9,24.9,4.2,48.4,12.8,71.3 c17.6,47.4,44.4,89.5,76.9,128.1c43.9,52.2,96.3,93.5,157.6,123.3c27.6,13.4,56.2,23.7,87.3,25.4c21.4,1.2,40-4.2,54.9-20.9 c10.2-11.4,21.7-21.8,32.5-32.7c16-16.2,16.1-35.8,0.2-51.8C403.554,355.9,384.454,336.9,365.354,317.9z"/%3E%3Cpath d="M346.254,238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89c-25.7-25.7-58.2-41.9-94-46.9l-5.2,37.1 c27.7,3.9,52.9,16.4,72.8,36.3C329.454,188.2,341.754,212,346.254,238.2z"/%3E%3Cpath d="M403.954,77.8c-42.6-42.6-96.5-69.5-156-77.8l-5.2,37.1c51.4,7.2,98,30.5,134.8,67.2c34.9,34.9,57.8,79,66.1,127.5 l36.9-6.3C470.854,169.3,444.354,118.3,403.954,77.8z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
  height: 35px;
`

export const LogoutButton = styled.div`
  cursor: pointer;
`
