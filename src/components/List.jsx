const List = ({ users, expand}) => {
  return (
    <div className="users-bar">
      {users.map((user) => {
        return (
          <div
            className="users-bar_name"
            key={user.id}
            onClick={() => {
              expand(user.id);
            }}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
};
export default List;
