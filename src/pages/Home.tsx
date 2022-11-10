import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import BottomMenuBar from "../components/BottomMenuBar";
import Trip from "../components/Trip";
import { useStore } from "../store";

const Home: React.FC = () => {
  const trips = useStore((state) => state.trips);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>M-Expenses App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {trips.map((trip, id) => (
            <Trip
              key={id}
              tripName={trip.tripName}
              description={trip.description}
              destination={trip.destination}
              date={trip.date}
              risk={trip.risk}
            />
          ))}
        </IonList>
      </IonContent>
      <BottomMenuBar />
    </IonPage>
  );
};

export default Home;
