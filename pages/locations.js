export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/location",
      permanent: true,
    },
  };
}

const LocationsRedirect = () => null;

export default LocationsRedirect;
