import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import BottomMenuBar from "../components/BottomMenuBar";

const NavTest: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>M-Expenses App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>Hello world</IonContent>;
      <BottomMenuBar />
    </IonPage>
  );
};

export default NavTest;
