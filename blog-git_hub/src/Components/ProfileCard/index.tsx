import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faUpRightFromSquare,
  faUserGroup,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "styled-components";
import {
  Container,
  Content,
  DescriptionProfile,
  FooterProfile,
  HeaderProfile,
} from "./index.style";

export function ProfileCard() {
  const theme = useTheme();
  return (
    <Container>
      <img src="https://scontent.fcgh24-1.fna.fbcdn.net/v/t39.30808-6/278127921_2260813877399900_5222672504032022619_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5A_OzRP9wKtwnT5jW92MffdN9OoJUTzt90306glRPO-rzvUskC9DUtVuMfMJvunP_2DLWEia8Lfol48eA7frK&_nc_ohc=vB9AkW91k8kAX80tK24&_nc_ht=scontent.fcgh24-1.fna&oh=00_AfCVUQkote0Ip2zzG0hi0ACnxrnaPynwBJCdds5trgZNHw&oe=6395111E" />
      <Content>
        <HeaderProfile>
          <h1>Walber Cesar</h1>
          <div>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
            <p>GITHUB</p>
          </div>
        </HeaderProfile>
        <DescriptionProfile>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </DescriptionProfile>
        <FooterProfile>
          <div>
            <FontAwesomeIcon color={theme["base-label"]} icon={faGithub} />
            <p>WalberCesar</p>
          </div>
          <div>
            <FontAwesomeIcon color={theme["base-label"]} icon={faBuilding} />
            <p>FreeLancer</p>
          </div>
          <div>
            <FontAwesomeIcon color={theme["base-label"]} icon={faUserGroup} />
            <p>10 seguidores</p>
          </div>
        </FooterProfile>
      </Content>
    </Container>
  );
}
