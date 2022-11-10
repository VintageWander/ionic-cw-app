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

const Trip: React.FC<TripModel> = ({
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
      <IonGrid>
        <IonRow class="ion-justify-content-between ion-align-items-center">
          <IonCol size="auto">
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
          </IonCol>
          <IonCol size="2">
            <IonButton
              color={"danger"}
              shape={"round"}
              onClick={() => removeTrip(tripName)}
            >
              Delete
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default Trip;
