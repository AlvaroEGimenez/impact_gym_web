import React from "react";
import "./styles.scss";
import Collapsible from "./Collapsible";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="content">
            <div className="list-group list-group-flush">
              <Collapsible title="Overview">
                <p>Lorem ipsum dolor sit amet.</p>
              </Collapsible>
              <Collapsible title="Features">
                <p>
                  Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit.
                  Tempore atque amet aliquam esse
                  labore odit ipsum totam
                  architecto suscipit cumque!
                </p>
              </Collapsible>
              <Collapsible title="Review">
                <p>
                  Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                  Veritatis explicabo soluta hic
                  deserunt reiciendis! Nihil iste
                  nobis odit praesentium officiis
                  optio tempora, soluta dolore
                  facere sint deserunt adipisci
                  pariatur, voluptatum incidunt!
                  Unde soluta eaque tenetur
                  architecto rem possimus, alias
                  qui ratione. Fugiat sed cumque
                  nemo harum? Nesciunt magnam at
                  velit animi! Hic perferendis
                  nostrum doloribus, ratione
                  voluptate totam atque corrupti
                  eveniet praesentium
                  exercitationem modi adipisci
                  itaque possimus, quam ad
                  accusantium at et quas, error
                  iste soluta aut assumenda
                  delectus? Eveniet iure nihil
                  vitae nobis tempore totam
                  quibusdam doloremque itaque
                  minima error officia, ab commodi
                  a rerum aspernatur consequatur
                  tempora consectetur.
                </p>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
