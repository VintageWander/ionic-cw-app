import {
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonNote,
  IonPage,
  IonRow,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { format, parseISO } from "date-fns";
import { addOutline, eye } from "ionicons/icons";
import { useState } from "react";
import BottomMenuBar from "../components/BottomMenuBar";
import Input from "../components/Input";
import Trip from "../components/Trip";
import TripModel from "../model/Trip";
import { useStore } from "../store";
import { useHistory } from "react-router-dom";
import PreviewCard from "../components/PreviewCard";

const AddTrip: React.FC = () => {
  const [tripName, setTripName] = useState<String>("");
  const [destination, setDestination] = useState<String>("");
  const [date, setDate] = useState<String>("");
  const [risk, setRisk] = useState<boolean>(false);
  const [description, setDescription] = useState<String>("");
  // const [allCorrect, setAllCorrect] = useState<boolean>(false);

  let history = useHistory();

  const addTrip = useStore((state) => state.addTrip);

  const showDate = (event: any) => {
    const dateFromIonDatetime = event.detail.value!;
    const formattedString = format(
      parseISO(dateFromIonDatetime),
      "MMM d, yyyy"
    );
    console.log(formattedString);
    setDate(formattedString);
  };

  const submit = (e: any) => {
    addTrip({
      tripName,
      destination,
      date,
      description,
      risk,
    } as TripModel);
    history.goBack();
  };

  const validateInput = (input: String) => {
    return new RegExp(/^[\w-_ ]{1,}$/).test(input.slice());
  };

  const isCorrect = (): boolean => {
    return (
      validateInput(tripName) &&
      validateInput(description) &&
      validateInput(destination)
    );
  };

  return (
    <IonPage>
      {/* Header area */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>M-Expenses App</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content area */}
      <IonContent>
        {/* Preview */}
        <PreviewCard
          destination={destination}
          tripName={tripName}
          description={description}
          date={date}
          risk={risk}
        />

        {/* Trip name input */}
        <Input
          inputName={"Trip name"}
          placeholder={"Enter trip name"}
          onChange={setTripName}
        />

        {/* Destination input */}
        <Input
          inputName={"Destination"}
          placeholder={"Enter destination"}
          onChange={setDestination}
        />

        {/* Date input */}
        <IonItem>
          <IonLabel>Trip date</IonLabel>
          <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
          <IonModal keepContentsMounted={true}>
            <IonDatetime
              id="datetime"
              presentation="date"
              showDefaultButtons={true}
              onIonChange={showDate}
            ></IonDatetime>
          </IonModal>
        </IonItem>

        {/* Risk toggle */}
        <IonItem>
          <IonToggle
            slot="start"
            onIonChange={() => setRisk(!risk)}
          ></IonToggle>
          <IonLabel>Risk accessment</IonLabel>
        </IonItem>

        {/* Description input area */}
        <IonItem>
          <IonLabel>Description</IonLabel>
          <IonTextarea
            placeholder="Type something here"
            onIonChange={(e) => setDescription(e.detail.value!)}
          ></IonTextarea>
        </IonItem>

        {/* Add button, in the middle, using grid */}
        <IonGrid>
          <IonRow class="ion-align-items-center">
            <IonCol class="ion-text-center">
              <IonButton disabled={!isCorrect()} shape="round" onClick={submit}>
                <IonIcon slot="icon-only" icon={addOutline}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* End content */}
      </IonContent>
      <BottomMenuBar />
    </IonPage>
  );
};

export default AddTrip;
