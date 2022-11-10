import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
} from "@ionic/react";
import TripModel from "../model/Trip";
import { useStore } from "../store";

const PreviewCard: React.FC<TripModel> = ({
  tripName,
  destination,
  description,
  date,
  risk,
}) => {
  const color = "tertiary";
  const removeTrip = useStore((state) => state.removeTrip);
  return (
    <IonCard color={color}>
      <IonCardHeader>
        <IonCardSubtitle>{destination || "Destination"}</IonCardSubtitle>
        <IonCardTitle>{tripName || "Trip name"}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonItem color={color}>
          <IonLabel>Description: {description || ""}</IonLabel>
        </IonItem>
        <IonItem color={color}>
          <IonLabel>Date: {date || ""}</IonLabel>
        </IonItem>
        <IonItem color={color}>
          <IonLabel>Risk: {risk ? "True" : "False" || ""}</IonLabel>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default PreviewCard;
