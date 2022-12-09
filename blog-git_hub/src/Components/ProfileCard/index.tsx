import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faUpRightFromSquare,
  faUserGroup,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { api } from "../../lib/axios";
import { Spinner } from "../Loading";
import {
  Container,
  Content,
  DescriptionProfile,
  FooterProfile,
  HeaderProfile,
} from "./index.style";

const username = import.meta.env.VITE_GITHUB_USERNAME;

type ProfileData = {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  company?: string;
  followers: number;
};

export function ProfileCard() {
  const theme = useTheme();
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );
  const [isLoading, setIsLoading] = useState(true);

  async function getProfile() {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/${username}`);
      setProfileData(response.data);
      setIsLoading(false);
    } finally {
    }
  }

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <img src={profileData.avatar_url} />
          <Content>
            <HeaderProfile>
              <h1>{profileData.name}</h1>
              <div>
                <p>GITHUB</p>
                <FontAwesomeIcon
                  color={theme.blue}
                  width="0.703125rem"
                  height="0.703125rem"
                  icon={faUpRightFromSquare}
                />
              </div>
            </HeaderProfile>
            <DescriptionProfile>{profileData.bio}</DescriptionProfile>
            <FooterProfile>
              <div>
                <FontAwesomeIcon color={theme["base-label"]} icon={faGithub} />
                <p>{profileData.login}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  color={theme["base-label"]}
                  icon={faBuilding}
                />
                <p>{profileData.company}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  color={theme["base-label"]}
                  icon={faUserGroup}
                />
                <p>{profileData.followers}</p>
              </div>
            </FooterProfile>
          </Content>
        </>
      )}
    </Container>
  );
}
