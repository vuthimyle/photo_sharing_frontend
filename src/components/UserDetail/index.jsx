import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import models from '../../modelData/models';

function UserDetail() {
  const { userId } = useParams();
   const [user, setUser] = useState(null);

    useEffect(() => {
        fetchModel(`https://rvfqlk-8081.csb.app/api/user/${userId}`)
            .then((data) => {
                setUser(data);
            })
            .catch((error) => {
                console.error("Error loading user detail:", error);
            });
    }, [userId]);

    if (!user) {
        return <Typography>Loading...</Typography>
    }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Location:</strong> {user.location}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Occupation:</strong> {user.occupation}
        </Typography>
        <Typography variant="body2" paragraph>
          {user.description}
        </Typography>
        <Box>
          <Button
            variant="contained"
            component={Link}
            to={`/photos/${user._id}`}
          >
            View Photos
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default UserDetail;