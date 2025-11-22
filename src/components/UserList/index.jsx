import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import models from '../../modelData/models';

function UserList() {
   const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchModel("https://rvfqlk-8081.csb.app/api/user/list")
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error loading user list: ", error);
      })
  }, [])

  return (
    <List component="nav">
      {users.map((user) => (
        <React.Fragment key={user._id}>
          <ListItem button component={Link} to={`/users/${user._id}`}>
            <ListItemText primary={`${user.first_name} ${user.last_name}`} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default UserList;