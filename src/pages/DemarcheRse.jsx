import { Link } from "react-router-dom";

function DemarcheRse() {
  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image12.png)" }}
      >
        <h1>S’engager dans une démarche RSE </h1>
      </div>
      <div className="flex flex-col pl-4 p-4 border-red-500 border-2 font-semibold">
        <p className="mb-6">
          La Mission Locale conseille les entreprises dans la mise en place
          d’une politique RSE, notamment au niveau de l’emploi des jeunes
        </p>
        <p className="mb-6">
          La Responsabilité Sociale et Environnementale est l’application d’une
          démarche développement durable par les entreprises. Ce concept suppose
          qu’elles intègrent dans leurs activités des préoccupations sociales,
          environnementales, et économiques. Elle s’applique aux multinationales
          cotées, comme aux petites et moyennes entreprises.
        </p>
        <h3 className="leading-tight">
          La RSE se traduit par un comportement éthique et transparent qui :
        </h3>
        <ul className="mb-6 mt-6 leading-tight">
          <li>
            - Contribue au développement durable, y compris à la santé et au
            bien-être de la société.
          </li>
          <li>
            - Prend en compte les attentes des parties prenantes (individu ou
            groupe ayant un intérêt dans les décisions ou activités d’une
            organisation : fournisseurs, clients, actionnaires, salariés,
            collectivités, médias, ONG, etc).
          </li>
          <li>
            - Respecte les lois en vigueur tout en étant en cohérence avec les
            normes internationales de comportement{" "}
          </li>
          <li>
            - Est intégrée dans l’ensemble de l’organisation et mise en œuvre
            dans ses relations{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DemarcheRse;
