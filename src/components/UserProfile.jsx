const UserProfile = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    borderRadius: "10px",
    marginTop: "20px",
  };

  return (
    <div>
      <h1 className="bungee-tint-regular">UserProfile</h1>
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-picasso-style-illustration_23-2149602592.jpg?t=st=1726690525~exp=1726694125~hmac=9bb81cb16cc5d053c9327db667425589f27df5e48a6ccf7c16f5c72d504a5fbf&w=826"
        alt="Placeholder Image"
        className="object-cover w-1/2 h-3/4"
      />
      <a href="/" className="test" style={mystyle}>
        Go Back to dashboard
      </a>
    </div>
  );
};

export default UserProfile;
