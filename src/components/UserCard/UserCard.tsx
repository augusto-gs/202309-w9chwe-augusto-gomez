import { Users } from "../../store/features/userSlice/types";
import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  user: Users;
}

const UserCard = ({
  user: { name, surname, age, imageUrl, occupation, sex, isFriend },
}: UserCardProps) => (
  <UserCardStyled className={`card`}>
    <div
      className={`card${
        isFriend ? "__friend-background" : "__enemy-background"
      }`}
    >
      {isFriend && <span className="card__friend-text">Friend</span>}
      {!isFriend && <span className="card__enemy-text">Enemy</span>}
      <img
        src={`${imageUrl}`}
        alt={`Close up of ${name} ${surname}`}
        className="card__image"
      ></img>
      <div className="card__text">
        <h2 className="card__name">{`${name} ${surname}`}</h2>
        <span className="card__age">Age: {age}</span>
        <span className="card__sex">Sex: {sex}</span>
        <span className="card__occupation">Occupation: {occupation}</span>
      </div>
    </div>
  </UserCardStyled>
);

export default UserCard;
