import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";

import { addCircleOutline, mapOutline } from "ionicons/icons";

const BottomMenuBar: React.FC = () => {
  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="/trip-list" href="/trip-list">
        <IonIcon icon={mapOutline} />
        <IonLabel>List of trips</IonLabel>
      </IonTabButton>
      <IonTabButton tab="/add-trip" href="/add-trip">
        <IonIcon icon={addCircleOutline} />
        <IonLabel>List of trips</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default BottomMenuBar;
