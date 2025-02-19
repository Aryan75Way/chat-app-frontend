import { Avatar, Box, Card, CardContent } from "@mui/material";

type Props = {
  data: Omit<User, "password">;
};

function UserProfile(props: Props) {
  const { email } = props.data;
  return (
    <Box>
      <Card sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
        <CardContent>
          <Box>
            <Box display="flex" alignItems="center">
              <Avatar alt={email} sizes="large" sx={{ width: 100, height: 100 }}>
                {email}
              </Avatar>
            </Box>
            {/* <Box ml="110px">
              <FormLabel>
                <Switch checked={active} /> Active
              </FormLabel>
            </Box> */}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserProfile;
