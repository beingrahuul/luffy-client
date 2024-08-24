import React from 'react';
import styled from 'styled-components';

const FirstContainer = styled.div`
  background-color: #1f1f1f;
  color: #fff;
  padding: 40px;
  border-radius: 10px;
  max-width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  @media screen and (max-width: 479px) {
    padding: 15px;
    font-size: 12px;
  }
`;

const SecondContainer = styled.div`
  margin-bottom: 20px;
`;

const MainHeading = styled.h1`
  font-size: 27px;
  margin-bottom: 30px;
  color: #dcdcdc;
`;

const SubHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: #f0f0f0;
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #cccccc;
  margin-bottom: 10px;
`;

function Dmca() {
  return (
    <FirstContainer>
      <MainHeading>DMCA Notice</MainHeading>

      <SecondContainer>
        <SubHeading>Compliance with the Digital Millennium Copyright Act (DMCA)</SubHeading>
        <Content>
          We respect the intellectual property rights of others and are committed to complying with the DMCA. We take copyright infringement seriously and will respond to notices of alleged copyright infringement that comply with the DMCA and any other applicable laws.
        </Content>
      </SecondContainer>

      <SecondContainer>
        <SubHeading>Third-Party Content</SubHeading>
        <Content>
          None of the files listed on Luffyhq.xyz are hosted on our servers. All links point to content hosted on third-party websites. Luffyhq.xyz does not accept responsibility for content hosted on third-party websites and has no involvement in the downloading/uploading of movies. We only post links that are available on the internet.
        </Content>
      </SecondContainer>

      <SecondContainer>
        <SubHeading>DMCA Takedown Request Requirements</SubHeading>
        <Content>
          If you believe that any content on our website is infringing upon your copyrights, please send us an email. Please allow up to 2-5 business days for a response. Please note that emailing your complaint to other parties such as our Internet Service Provider, Hosting Provider, and other third parties will not expedite your request and may result in a delayed response due to the complaint not being filed properly.
        </Content>
      </SecondContainer>

      <SecondContainer>
        <SubHeading>DMCA Report Requirements</SubHeading>
        <Content>To file a DMCA complaint, please provide the following information:</Content>
        <Content>1. A description of the copyrighted work that you claim is being infringed.</Content>
        <Content>2. A description of the material you claim is infringing and that you want removed or access to which you want disabled, with a URL and proof you are the original owner or other location of that material.</Content>
        <Content>3. Your name, title (if acting as an agent), address, telephone number, and email address.</Content>
        <Content>
          4. The following statement: "I have a good faith belief that the use of the copyrighted material I am complaining of is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use)."
        </Content>
        <Content>
          5. The following statement: "The information in this notice is accurate and, under penalty of perjury, I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right that is allegedly infringed."
        </Content>
        <Content>
          6. The following statement: "I understand that I am subject to legal action upon submitting a DMCA request without solid proof."
        </Content>
        <Content>
          7. An electronic or physical signature of the owner of the copyright or a person authorized to act on the owner's behalf.
        </Content>
      </SecondContainer>

      <SecondContainer>
        <Content>Your DMCA take down request should be submitted here: <span style={{color: 'yellow'}}>theluffymovies@gmail.com</span></Content>
        <Content>We will then review your DMCA request and take proper actions, including removal of the content from the website.</Content>
      </SecondContainer>
    </FirstContainer>
  );
}

export default Dmca;
