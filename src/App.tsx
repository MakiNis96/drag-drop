/*
	Napraviti mini-library za drag & drop (D&D) koji u pozadini koristi context API.
	Implementacija treba da koristi HTML5 D&D API i da se ne oslanja na postojece D&D npm pakete.
	Sva logika (onDragStart, onDragEnd, onDragOver, itd.) treba da se nalazi u DragContext, DragArea i DragItem
	komponentama tako da nije izlozena korisniku library-a.
	
	U ovom slucaju event handler onDragStart trebao bi da bude na DragItem komponenti, dok bi
	onDrop i onDragOver trebali da budu na DragArea componenti. Te dvije komponente izmedju sebe
	trebaju da komuniciraju putem context API.
	
	Metode za komunikaciju mogu da se nalaze u DragContext ili DragArea komponenti.

	Pozeljno je napraviti stil za UserItem komponentu radi boljeg prikaza konacne aplikacije.
	
	Ispod je primjer komponente koja bi korista library na zeljeni nacin. Ukoliko ovakva struktura
	bude u browseru rezultovala renderovanju liste korisnika koja se moze sortirati, zadatak se smatra
	uspjesno zavrsenim.

	Za zadatak kreirati poseban projekat gdje ce sadrzaj App.tsx fajla biti ovaj fajl.
	
	Koristiti React i TypeScript.

	Puno srece ;-)
*/
import { useState } from "react";
import { DragContext } from "./components/DragContext";
import { DragArea } from "./components/DragArea";
import { DragItem } from "./components/DragItem";
import users from "./users.json";
import styles from './styles'

type UserProps = {
  name: string;
  email: string;
};

const UserItem = ({ name, email }: UserProps) => {
  return (
    <li style={styles.card}>
      <span>{name}</span>
      <span>{email}</span>
    </li>
  );
};

export const DraggableUserList = () => {
  const [exampleUsers, setExampleUsers] = useState(users);

  return (
    <DragContext>
      <ul style={styles.container}>
        <DragArea items={exampleUsers} onChange={setExampleUsers}>
          {exampleUsers.map((user, i) => (
            <DragItem key={i} index={i}>
              <UserItem name={`${user.firstName} ${user.firstName}`} email={user.email} />
            </DragItem>
          ))}
        </DragArea>
      </ul>
    </DragContext>
  );
};