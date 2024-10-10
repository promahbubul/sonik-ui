import About from "@/components/Events/About";
import Footer from "@/components/Events/Footer";
import Header from "@/components/Events/Header";
import { useRouter } from "next/router";

const Events = ({ event }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="min-h-screen bg-black text-white  bg-[url('/assets/event/body-bg.png')] bg-repeat">
      {id ? (
        <>
          <Header event={event} />
          <About event={event} />
          <Footer event={event} />
        </>
      ) : (
        <div className="flex justify-center items-center h-screen w-screen">
          <div className="animate-spin rounded-full h-96 w-96 border-t-4 border-indigo"></div>
        </div>
      )}
    </main>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params || {};

  if (id) {
    // const res = await fetch(`http://127.0.0.1:5000/api/v1/events/public/${id}`)
    const event = {
      _id: "651c0a6e44486ff999001111",
      _created_by: {
        _id: "670730404bbb78c4d6115cab",
        email: "nazmul@gmail.com",
        password:
          "$2b$10$WHVY87njyQ8b9tpDZdx3OeWsA5Iy/Ro2u501eTSBS3OJWUqIQ.7TK",
        phoneNumber: "+16465553456",
        dob: "1995-04-12T00:00:00.000Z",
        verified: false,
        active: true,
        locale: "es",
        createdAt: "2024-10-11T04:48:08.747Z",
        updatedAt: "2024-10-10T01:39:12.446Z",
        organizations: [
          {
            organization: "670730404bbb78c4d6115cc2",
            role: "670730404bbb78c4d6115ccf",
            _id: "670730404bbb78c4d6115d02",
          },
        ],
        defaultOrganization: "670730404bbb78c4d6115cc2",
        defaultRole: "670730404bbb78c4d6115ccf",
      },
      _organization: {
        _id: "670730404bbb78c4d6115cc4",
        _creator: "670730404bbb78c4d6115ca8",
        name: "Health First",
        description:
          "Promoting healthy living through education and resources.",
        website: "https://www.healthfirst.org",
        address: {
          query: "101 Wellness Way, Austin, TX 73301, USA",
          line1: "101 Wellness Way",
          zip: "73301",
          region: "TX",
          country: "USA",
        },
        location: {
          type: "Point",
          coordinates: [],
        },
        image:
          "https://media.istockphoto.com/id/1312139041/photo/learning-on-the-job.webp?b=1&s=170667a&w=0&k=20&c=atR4O706RgAUh6U7SLz4-o6iDqdbHCeVLQTI3NxjL-Y=",
        facebookID: "healthfirst",
        instagramID: "health.first",
        twitterID: "Health1stOrg",
        status: true,
        createdAt: "2024-10-13T13:21:37.793Z",
        updatedAt: "2024-10-13T13:21:37.793Z",
      },
      _tickettiers: [
        {
          _id: "651c0a6e44486ff999002001",
          _event: "651c0a6e44486ff999001111",
          name: "General Admission",
          description: "Entry to the event",
          total_ticket_quantity: 500,
          sold_ticket_quantity: 0,
          privacy: "public",
          pricingType: "free",
          price: 0,
          start_availability: "2024-10-01T12:00:00.000Z",
          end_availability: "2024-11-01T12:00:00.000Z",
          require_approval: false,
          active: true,
          createdAt: "2024-10-10T01:39:12.503Z",
          updatedAt: "2024-10-10T01:39:12.503Z",
        },
      ],
      event_id: "E-00001",
      title: "Electronic Music Festival",
      type: "concert",
      event_status: "active",
      description: "A night of non-stop electronic music with top DJs.",
      privacy: "public",
      venue: {
        _venue: null,
        google_place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
        formatted_address: "123 Festival Ave, Bogotá, Colombia",
        location: {
          type: "Point",
          coordinates: [-74.0721, 4.711],
        },
        city: "Bogotá",
        region: "Cundinamarca",
        country: "Colombia",
      },
      artists: [
        {
          spotify_id: "5K4W6rqBFWDnAN6FQUkS6x",
          name: "John Doe",
          photo: "https://i.ibb.co.com/KqkGYT5/20.jpg",
          description:
            "An award-winning pop artist known for his energetic performances.",
          genre: ["house", "electronic"],
          spotify_url: "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x",
          start_time: "2024-09-25T02:28:53.208Z",
          _id: "67073c9e61119ec73cf86760",
        },
        {
          spotify_id: "4A576trrwsFAKXhvKQZtdF",
          name: "Jane Smith",
          photo: "https://i.ibb.co.com/b277GDy/21.jpg",
          description:
            "A talented indie singer-songwriter with a soulful sound.",
          genre: ["disco", "pop"],
          spotify_url: "https://open.spotify.com/artist/4A576trrwsFAKXhvKQZtdF",
          start_time: "2024-09-25T02:28:53.208Z",
          _id: "67073c9e61119ec73cf86761",
        },
      ],
      presented_by: "Music Fest Productions",
      timezone: "COT",
      event_start: "2024-11-01T20:00:00.000Z",
      event_end: "2024-11-02T02:00:00.000Z",
      images: {
        primaryImage:
          "https://sonikfm.s3.amazonaws.com/events/1728409091536-image.jpg",
      },
      age_limit: 18,
      re_entry_allowed: false,
      currency: "COL",
      ticket_limit_per_user: 5,
    };

    return {
      props: { event: event },
    };
  }
}

export default Events;
