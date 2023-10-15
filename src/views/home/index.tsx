import * as React from "react";
import Header from "../../components/header/header";
import { UserController } from "../../controllers/UserController";
import { UserData } from "../../models/User";

function HomePage() {
  const userController = new UserController();
  const [userData, setUserData] = React.useState<UserData | null>(null);

  const handleClick = async () => {
    try {
      const fetchedUserData = await userController.getUserData();
      setUserData(fetchedUserData);
    } catch (error) {
    }
  }

  React.useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="body">
      <Header userData={userData} />
    </div>
  );
}

export default HomePage;
