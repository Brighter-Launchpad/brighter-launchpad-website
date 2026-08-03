// Program copy sourced from childcare-programs.docx (provided by the client).
// Images are placeholders reusing existing template stock photos until real
// photos are supplied.

export const programsIntro = {
  eyebrow: "For Every Age And Stage",
  title: "Programs Built Around The Child In Front Of Us",
  paragraphs: [
    "We offer four programs, each built for a genuinely different stage of childhood. An infant learns by being held and answered; a four-year-old learns by negotiating who gets the blue cape; a nine-year-old learns by being trusted with something real. Grouping children by age is not an administrative convenience — it is what allows the room, the routine, and the expectations to fit the child who is actually in front of us.",
    "What stays consistent across all four programs is the approach. Children are given long, uninterrupted stretches of time to play, because that is when the good thinking happens. Educators follow the child's lead rather than marching a group through a schedule. Outdoor time happens every day, in every season. And families are treated as the people who know their child best — we adapt to your routines far more often than we ask you to adapt to ours.",
  ],
  closing:
    "Children do not need to be rushed toward the next stage. They need enough time, and enough of the right kind of attention, to finish the one they are in.",
};

export const programs = [
  {
    slug: "program-infant",
    name: "Infant Program",
    tagline:
      "A small, quiet room where the day moves at your baby's pace, not the clock's.",
    ageRange: "Birth to 2 years",
    schedule: "Full-time, year-round",
    setting:
      "A dedicated infant room with its own rest area and outdoor space",
    quickFacts: {
      ages: "Birth – 2 years",
      schedule: "Full-time · Year-round",
      setting: "Dedicated Infant Room",
    },
    cardImage: "assets/images/common/program-infant-card.png",
    heroImage: "assets/images/common/sc-program1.jpg",
    sectionImage: "assets/images/common/sc-program7.jpg",
    sections: [
      {
        heading: "About the program",
        paragraphs: [
          "The first two years are the most relationship-driven stretch of a person's whole life. Babies learn that the world is safe, and that they matter in it, by being picked up when they cry, answered when they babble, and cared for by the same few familiar people day after day. Everything about our infant room is designed to protect that.",
          "We keep the group small and the atmosphere unhurried. Educators stay with the same children rather than rotating between rooms, so your baby is cared for by someone who knows the difference between their tired cry and their hungry one — usually within the first two weeks. The room itself is deliberately calm: soft light, low noise, no competing music or screens, and plenty of clear floor space rather than wall-to-wall equipment.",
        ],
      },
      {
        heading: "How the day is shaped",
        paragraphs: [
          "Infants do not follow a group schedule. Each child has their own rhythm for feeding, sleeping, and play, and we build the day around those rhythms rather than the other way around. That means at any given moment one baby may be napping, another eating, and a third on the floor with an educator — which is exactly how it should look.",
          "We start from the routine you already have at home. Before your child's first day we sit down with you to map out their feeding times, sleep cues, comfort habits, preferred sleeping position, and anything that soothes them quickly. That plan is written down, shared with every educator in the room, and revisited as your baby grows — usually every few weeks in the early months, since infant routines change fast.",
        ],
      },
      {
        heading: "Learning and development",
        paragraphs: [
          "At this age, learning is sensory and physical. Babies explore textures, weight, sound, and cause and effect — dropping a spoon forty times is not stubbornness, it is a repeated experiment. We fill the room with safe, open-ended things worth investigating: fabrics, wooden objects, mirrors, containers to fill and empty, and real household items alongside toys.",
          "Language starts long before words do. Educators narrate what is happening throughout the day — during diaper changes, feeding, dressing, and play — and respond to babbling as though it were conversation, because to your child it is. There are songs, rhymes, and one-on-one book time daily, with the same books returning often enough to become favourites.",
          "Physical milestones are supported rather than pushed. As babies begin to roll, sit, pull up, cruise, and walk, we clear space and change the layout of the room so they have somewhere safe to practise. Older infants get more challenge: low steps to climb, things to push, and simple problems to solve on their own before we step in.",
        ],
      },
      {
        heading: "Staying connected during the day",
        paragraphs: [
          "You receive a written daily record covering feeds, nap times and lengths, diaper changes, mood, and anything notable that happened. Alongside that, educators share the moments that actually matter to you — the first time they pulled up on the shelf, the sound they have started making, the friend they watched all morning. If anything about the day concerns us, you hear about it that day, not at the next scheduled meeting.",
          "Parents are welcome in the room at any time. Nursing and pumping parents are especially welcome — we will keep a space available and hold a feed if you are on your way.",
        ],
      },
      {
        heading: "Settling in",
        paragraphs: [
          "Starting childcare as an infant is a significant transition, and it is usually harder on parents than on babies. We run a gradual settling-in period: short visits first, then partial days, building up to full days over roughly a week, with the pace set by how your child is coping rather than a fixed timetable. Most families find the first three or four days are the hardest and things ease noticeably after that.",
        ],
      },
    ],
    includes: [
      "A dedicated infant room with its own rest area, cribs, and outdoor space",
      "Individual feeding, sleeping, and play routines set with parents and updated as your child grows",
      "Consistent educators who stay with the same small group",
      "Daily written record of feeds, naps, diaper changes, and milestones",
      "Sensory play, music, rhymes, and one-on-one book time every day",
      "Room layout adapted around emerging physical milestones",
      "Daily outdoor time, weather permitting",
      "Gradual, paced settling-in period for new families",
      "Support for the transition into the toddler and preschool room",
    ],
  },
  {
    slug: "program-toddler-preschool",
    name: "Toddler / Preschool Program",
    tagline:
      "Where children learn to think, to negotiate, and to do things for themselves.",
    ageRange: "2 years to school entry",
    schedule: "Full-time, year-round",
    setting: "Learning areas set up for choice, with daily indoor and outdoor play",
    quickFacts: {
      ages: "2 Years – School Entry",
      schedule: "Full-time · Year-round",
      setting: "Choice-Based Learning Areas",
    },
    cardImage: "assets/images/common/program-toddler-preschool-card.png",
    heroImage: "assets/images/common/sc-program2.jpg",
    sectionImage: "assets/images/common/sc-program8.jpg",
    sections: [
      {
        heading: "About the program",
        paragraphs: [
          "Somewhere between two and five, children stop playing beside each other and start playing with each other — and that single shift changes everything about what they need. Suddenly they are negotiating roles, defending ideas, managing disappointment, and discovering that other people want things too. This program is built around that transition.",
          "The room is arranged as a set of learning areas rather than one large open space: construction and blocks, dramatic play, books and a quiet corner, art and making, sand and water, puzzles and small-world play. Children move freely between them and choose where to invest their time. Long uninterrupted play periods are protected in the daily schedule, because most of what is worth learning at this age happens in the twentieth minute of a game, not the second.",
        ],
      },
      {
        heading: "How learning works here",
        paragraphs: [
          "Our approach is play-based, which is not the same as unstructured. Educators observe closely, notice what a child is working on, and then deliberately add something to extend it — a question, a new material, a book on the subject, a challenge. A child obsessed with ramps gets steeper ramps, heavier balls, and eventually a conversation about why one rolls further. A child mid-way through building a shop gets paper for price tags.",
          "Interests that grip the whole group turn into longer projects the children return to over days or weeks. These are led by their questions rather than a pre-set curriculum theme, so what runs in one year rarely repeats in the next.",
          "Early literacy grows out of stories, songs, rhymes, and children's own drawing and mark-making, alongside a print-rich room where their names and words appear on things they care about. Early math is built into what they are already doing: sorting, counting, comparing, measuring, spotting patterns, and figuring out how to make a tower stay up. Science and nature come mostly from the outdoors and from questions we did not plan for.",
        ],
      },
      {
        heading: "The skills that are harder to see",
        paragraphs: [
          "As much attention goes to social and emotional learning as to anything academic. Children practise naming what they feel, waiting for a turn, joining a game already in progress, and disagreeing without the whole thing falling apart. When conflict happens — and it does, constantly, which is normal — educators slow it down and help both children say what they wanted and hear what the other wanted, rather than simply separating them and assigning blame.",
          "Independence is a daily habit rather than a lesson. Children manage their own coats and boots, pour their own drinks, serve themselves at the table, wash up, and help put the room back together. It is slower than doing it for them, and it is the point.",
        ],
      },
      {
        heading: "A typical day",
        scheduleItems: [
          { label: "Arrival", desc: "Settling in, greeting friends, quiet table activities" },
          { label: "Morning", desc: "Long uninterrupted free-choice play across the learning areas, with educators extending projects" },
          { label: "Mid-morning", desc: "Snack together, then outdoor play in all but the most extreme weather" },
          { label: "Late morning", desc: "Small-group time — stories, music and movement, or a focused activity" },
          { label: "Lunch", desc: "Shared meal, with children helping to set up and clear away" },
          { label: "Early afternoon", desc: "Rest or quiet time, sized to each child's needs; non-sleepers have calm alternatives" },
          { label: "Afternoon", desc: "Second outdoor block, followed by open play, art, and projects" },
          { label: "Late afternoon", desc: "Snack, tidy-up, and calmer activities until pick-up" },
        ],
      },
      {
        heading: "Getting ready for school",
        paragraphs: [
          "In the year before kindergarten the focus tilts gently — not toward worksheets, but toward the things that actually make the first weeks of school easier. Children practise longer group times, following multi-step instructions, listening while others speak, recognising and writing their own name, and managing their own belongings and bathroom needs independently.",
          "We share a summary of your child's development and interests before they move on, and where families want it, we are happy to speak with the receiving school.",
        ],
      },
      {
        heading: "Working with families",
        paragraphs: [
          "You will hear about your child's day at pick-up, and more substantially through ongoing documentation of what they have been working on. We hold conversations about development at least twice a year, and any time you or we feel one is needed. If we notice something that might warrant a closer look — speech, hearing, motor skills, or social development — we raise it early, gently, and with practical next steps rather than alarm.",
        ],
      },
    ],
    includes: [
      "Interest-based learning areas and long, protected free-choice play periods",
      "Child-led projects extended by educators over days or weeks",
      "Early literacy through stories, songs, rhymes, and mark-making",
      "Early math through sorting, counting, patterns, measuring, and building",
      "Art, music, movement, sensory play, sand and water",
      "Daily social-emotional coaching and hands-on conflict resolution",
      "Self-help routines: dressing, serving, tidying, and personal care",
      "Two outdoor play blocks daily, in all seasons",
      "Rest or quiet period, with alternatives for non-sleepers",
      "School-readiness focus in the final year, plus a handover summary",
      "Developmental conversations with families at least twice a year",
    ],
  },
  {
    slug: "program-after-school",
    name: "After-School Program",
    tagline:
      "Somewhere to land at 3 p.m. — a snack, room to move, and the afternoon on their own terms.",
    ageRange: "Children attending school, up to age 12",
    schedule: "After school hours during the school year",
    setting: "Mixed-age group, with quiet space and active space available",
    quickFacts: {
      ages: "School Age – 12 Years",
      schedule: "After School Hours",
      setting: "Mixed-Age Group",
    },
    cardImage: "assets/images/common/program-after-school-card.png",
    heroImage: "assets/images/common/sc-program5.jpg",
    sectionImage: "assets/images/common/sc-program9.jpg",
    sections: [
      {
        heading: "About the program",
        paragraphs: [
          "By three o'clock, most children have been sitting, listening, and following instructions for six hours. What they need next is not more of the same. Our after-school program opens with a snack and unstructured time — room to move, friends to find, and no one asking anything of them for a while. Everything after that is largely their choice.",
          "This is deliberately the least scheduled program we run. Children this age have very little say over how their day goes, and an afternoon where they decide what to do, who to do it with, and when to switch is genuinely valuable rather than merely convenient.",
        ],
      },
      {
        heading: "Homework, if you want it",
        paragraphs: [
          "A quiet homework space is available every afternoon with an educator on hand. The role is not to teach the lesson or check the answers — it is to help children settle, stay on task, and work through the part that has them stuck. Children who finish, or who are told to keep working, get help doing exactly that.",
          "Families who would rather keep homework at home can simply opt out, and no one is singled out for it. Those children join the afternoon's activities instead. We are happy to follow whatever you have agreed with your child's teacher.",
        ],
      },
      {
        heading: "How the afternoon runs",
        paragraphs: [
          "Once the snack is done, several things run in parallel and children move between them. Active games and sports get them off their feet after a day at a desk, with an outdoor option whenever the weather allows and a gym-style space when it does not. Indoors there are creative arts and making, building and construction, board games and card games, reading, and a genuinely quiet corner for children who need to decompress alone before they are ready to be sociable again.",
          "Educators put out invitations rather than assignments — an art project, a group challenge, a cooking activity, a tournament — and children opt in. Over a term, most children try far more than they would have if it had been compulsory.",
        ],
      },
      {
        heading: "Older children",
        paragraphs: [
          "Keeping ten, eleven, and twelve-year-olds engaged means giving them something real. Older children help plan the week's activities, run games for the younger ones, set and enforce group expectations, and take on responsibilities that actually matter. Many stay in the program precisely because it does not treat them like the little kids.",
          "Mixed ages are part of the design. Children from kindergarten through the upper grades share the space, and the cross-age friendships and mentoring that form are one of the things families mention most often.",
        ],
      },
      {
        heading: "Getting here and getting home",
        paragraphs: [
          "Arrangements for arrival from school are confirmed with each family, and we know exactly which children to expect each afternoon. If a child does not arrive when expected, we follow up immediately rather than waiting. Children are released only to the people named on your authorisation list, and we will ask for identification from anyone we do not recognise.",
          "We also cover the awkward days — early dismissals and short school days — where we can, so the afternoon does not fall apart when the school calendar changes.",
        ],
      },
    ],
    includes: [
      "Afternoon snack on arrival",
      "Unstructured settling-in time before anything is asked of them",
      "Optional quiet homework space with an educator on hand",
      "Active games, sports, and daily outdoor time when weather allows",
      "Creative arts, making, building, and open-ended projects",
      "Board games, cards, reading, and a genuine quiet-down space",
      "Optional educator-led activities children opt into rather than are assigned",
      "Leadership and mentoring roles for older children",
      "Mixed-age grouping from kindergarten upward",
      "Confirmed arrival procedures and authorised pick-up only",
    ],
  },
  {
    slug: "program-summer-camp",
    name: "Summer Camp Program",
    tagline:
      "Long days, weekly themes, and the kind of summer children still talk about in October.",
    ageRange: "Children attending school, up to age 12",
    schedule: "Full days through July and August, booked by the week",
    setting: "Familiar educators and familiar space, with scheduled off-site trips",
    quickFacts: {
      ages: "School Age – 12 Years",
      schedule: "Full Days · Jul – Aug",
      setting: "Weekly Themed Sessions",
    },
    cardImage: "assets/images/common/program-summer-camp-card.png",
    heroImage: "assets/images/common/sc-program6.jpg",
    sectionImage: "assets/images/common/sc-program10.jpg",
    sections: [
      {
        heading: "About the program",
        paragraphs: [
          "Summer camp is the fullest version of our school-age program: whole days instead of afternoons, room for projects that take a week rather than an hour, and enough time outdoors that children come home properly tired. It runs in weekly sessions, each with its own theme, so families can book the entire summer or only the weeks they need.",
          "Because camp runs out of the same space with many of the same educators children already know, the first morning tends to be easy for returning families — and a much gentler landing for children joining us only for the summer.",
        ],
      },
      {
        heading: "How a week is built",
        paragraphs: [
          "Each week is organised around a theme — science and experiments, building and engineering, art and making, sports and games, nature and the outdoors, cooking, or performance — and the theme shapes the projects rather than dictating every activity. Something the group has made, built, cooked, or rehearsed together usually caps off the week.",
          "Within that, children still get real choice. Alongside the themed project there is always free play, an active option, and a quieter option, so a child who does not want to be in the middle of everything at two o'clock on a hot afternoon has somewhere else to be.",
        ],
      },
      {
        heading: "A typical camp day",
        scheduleItems: [
          { label: "Morning drop-off", desc: "Arrival, quiet games, and settling in as the group gathers" },
          { label: "Mid-morning", desc: "Outdoors while it is still cool — field games, group challenges, nature exploration, water play" },
          { label: "Late morning", desc: "The week's themed project: building, experimenting, making, or rehearsing" },
          { label: "Lunch", desc: "Packed lunches eaten together, usually outside" },
          { label: "Early afternoon", desc: "Deliberate quiet time — reading, drawing, card games, shade and water" },
          { label: "Afternoon", desc: "Second active block, sports, or the continuation of the project" },
          { label: "Late afternoon", desc: "Snack, free play, tidy-up, and calmer activities until pick-up" },
        ],
      },
      {
        heading: "Trips and special days",
        paragraphs: [
          "Off-site trips and visiting guests are scheduled through the season — the specific outings vary year to year and are confirmed in the summer schedule sent to families in advance, along with any additional cost, what to bring, and departure and return times. Trips are optional, and children not attending a particular outing are cared for on site.",
          "Weeks that include water activities, swimming, or anything requiring extra supervision are flagged clearly in the schedule, along with any consent or equipment needed.",
        ],
      },
      {
        heading: "Pacing a long day",
        paragraphs: [
          "Ten hours is a long time to be a child in a group, and we plan for that rather than filling every minute. Quiet time is built into every afternoon, shade and water breaks run throughout the day, and there is enough unscheduled play that children are not managed from drop-off to pick-up. Hot-weather days are adjusted as needed, with more indoor and shaded activity and less time on open field.",
          "We ask families to send a labelled water bottle, sunscreen, a hat, and a change of clothes daily, plus swimwear and a towel on water days. Anything else specific to a themed week goes out with that week's schedule.",
        ],
      },
      {
        heading: "Booking",
        paragraphs: [
          "Camp is booked by the week, and popular weeks tend to fill first. Families already enrolled in our after-school program usually get first access to the schedule, with remaining spaces opening to the wider community afterward. Registration, deposits, and cancellation terms are set out in the summer information package.",
        ],
      },
    ],
    includes: [
      "Weekly themed sessions, bookable individually or as a full summer",
      "Full-day care through July and August",
      "Daily outdoor play, field games, group challenges, and water play",
      "A week-long themed project with something to show at the end",
      "Creative making, cooking, science, sports, and nature activities",
      "Scheduled off-site trips and visiting guests, confirmed in advance",
      "Built-in quiet time, shade, and water breaks every day",
      "Free play protected within the daily schedule",
      "Familiar educators and a familiar setting",
      "Priority booking for families already enrolled with us",
    ],
  },
];
