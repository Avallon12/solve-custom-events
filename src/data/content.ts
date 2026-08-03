/**
 * Long-form copy, verbatim from "Sol Vé Custom Events Website order and
 * messaging". Nothing here is invented or paraphrased.
 */

export const home = {
  eyebrow: 'Sol Vé Custom Events',
  headline: ['We design how people', 'gather.'],
  subheadline: 'Because the way people gather shapes everything that follows.',
  philosophyEyebrow: 'Our Philosophy',
  philosophyHeadline: 'Every meaningful gathering begins long before people arrive.',
  philosophyBody: [
    'It influences relationships, ideas, cultures, communities, and the possibilities that emerge when people come together with intention.',
    'At Sol Vé, we believe thoughtful design and genuine hospitality are not simply acts of service — they are acts of stewardship. Every environment we create is an opportunity to foster belonging, encourage meaningful connection, and shape experiences that extend far beyond the occasion itself.',
  ],
  closingHeadline: 'Let us begin the conversation.',
  closingBody:
    'Whether you are celebrating a milestone, bringing people together around a shared purpose, creating an unforgettable experience, or exploring an idea that has yet to take shape, we would be honoured to hear your story.',
} as const





export const foundation = {
  headline: 'Every meaningful gathering begins long before people arrive.',
  intro: [
    'Every meaningful gathering begins long before people arrive and continues long after they leave. It influences relationships, ideas, cultures, communities, and the possibilities that emerge when people come together with intention.',
    'At Sol Vé, we believe thoughtful design and genuine hospitality are not simply acts of service — they are acts of stewardship. Every environment we create is an opportunity to foster belonging, encourage meaningful connection, and shape experiences that extend far beyond the occasion itself.',
    'This is the foundation upon which every Sol Vé experience is created, every partnership is formed, and every future initiative is built.',
  ],
  way: {
    title: 'The Sol Vé Way',
    body: [
      'We design how people gather because we believe the way people come together shapes everything that follows.',
      'Every gathering is entrusted to us with purpose. Whether celebrating a milestone, strengthening a relationship, advancing an idea, supporting a community, or convening leaders to address the world’s most pressing challenges, we recognize that what happens within those moments has the potential to extend far beyond the occasion itself.',
      'That responsibility shapes the way we work.',
      'We approach every experience as stewards of the moments entrusted to us. Through thoughtful design, genuine hospitality, careful craftsmanship, and intentional collaboration, we create environments where people feel welcomed, valued, and inspired to be fully present.',
      'We believe the most meaningful experiences are never measured solely by their beauty or complexity. They are measured by the connections they strengthen, the conversations they inspire, and the lasting impact they have on the people who share them.',
      'This is the standard that guides every decision we make, every relationship we build, and every experience we are privileged to create.',
    ],
    close: 'This is the Sol Vé Way.',
  },
  beyond: {
    title: 'Beyond the Occasion',
    opening: [
      'Not every gathering shapes what follows.',
      'The ones that do are never left to chance.',
      'They are thoughtfully designed. Carefully stewarded. Intentionally experienced.',
    ],
    body: [
      'At Sol Vé, we understand that every gathering carries something greater than the occasion itself. A wedding becomes the beginning of a family. A celebration becomes part of a personal story. A workshop becomes the beginning of a new perspective. A philanthropic event becomes an opportunity to strengthen a community. A conference becomes the place where conversations become collaboration and ideas become action.',
      'These are the moments entrusted to us. They deserve more than exceptional planning. They deserve thoughtful stewardship.',
      'This belief shapes every decision we make. Every environment we create. Every relationship we build. Every detail we consider.',
    ],
    couplets: [
      ['Beauty is never the destination.', 'It is the invitation.'],
      ['Hospitality is never a service.', 'It is how people know they belong.'],
      ['Design is never decoration.', 'It is the intentional creation of experiences that reflect purpose, strengthen connection, and create the conditions for what comes next.'],
    ],
    close: [
      'Whether welcoming two families into one, bringing communities together around a shared purpose, or convening leaders to address global challenges, our role remains the same: to thoughtfully design how people gather so that what follows is worthy of why they came together in the first place.',
      'We are entrusted with moments that shape what follows.',
      'That is why Sol Vé.',
    ],
  },
  began: {
    title: 'Where It Began',
    body: [
      'Every meaningful gathering begins long before people arrive. It begins with a decision.',
      'A decision to celebrate. To listen. To learn. To heal. To collaborate. To honour. To imagine what might become possible when people choose to come together.',
      'From that simple observation, Sol Vé was born.',
      'Over time, Founder Lynea Vaugeois Hetherington came to recognize that the gatherings that leave the greatest impression are rarely defined by their scale, their elegance, or their complexity. They are remembered for how they make people feel, the relationships they strengthen, the perspectives they broaden, and the possibilities they create long after the occasion has ended.',
      'That realization transformed the purpose of her work. The gathering was never the destination. It was where everything else began.',
      'What began with thoughtfully designing celebrations became a lifelong commitment to designing how people gather. Weddings became opportunities to honour families and traditions. Hospitality became a way of creating belonging. Workshops became spaces for learning and discovery. Philanthropic experiences became catalysts for stronger communities. Conferences became places where ideas, partnerships, and leadership could shape meaningful progress.',
      'As the philosophy continued to evolve, so did the work. That same belief would eventually find expression through initiatives such as the Mystic Moonlight Masquerade Fundraising Campaign. Different expressions. One enduring philosophy.',
      'Sol Vé began with a belief that thoughtfully designed gatherings can shape what follows. Today, that belief is expressed through celebrations, hospitality, philanthropy, and global convening. Tomorrow, it will continue to evolve wherever intentional gathering creates new possibilities for people, communities, and society.',
    ],
  },
} as const

/**
 * Our Commitments.
 *
 * Layout is fixed by Lynea: a quote on top, then three vertical boxes —
 * Reconciliation, 2SLGBTQIA+, and Conservation and Environmental — each equal
 * in size and spacing "to show that none is more important than the other".
 * Community Impact therefore sits in its own full-width section below rather
 * than as a fourth box, so the three are never visually ranked.
 */
export const commitments = {
  quote:
    'DIVERSITY is having a seat at the table, INCLUSION is having a voice, BELONGING is having that voice be heard.',
  quoteAttribution: 'Author unknown',
  quoteBody:
    'At Sol Vé Custom Events, the owners and staff alike live by these expressed values of diversity, inclusion and belonging.',
  intro: [
    'The experiences we create are shaped not only by how we gather, but by the responsibility we carry to the people, communities, and places that welcome us.',
    'These commitments guide how we work, how we collaborate, and how we contribute beyond every experience we create.',
  ],
  pillars: [
    {
      id: 'reconciliation',
      label: 'Reconciliation',
      title: 'Reconciliation & Land Acknowledgement',
      lead: 'Every meaningful gathering begins with respect.',
      body: [
        // Opening and closing lines are v5's exact wording from
        // solvecustomevents.com/values-1; the territory paragraph is the newer
        // document's fuller version. See README for the one discrepancy between
        // them that Lynea needs to settle.
        'We at Sol Vé Custom Events believe that all people share the responsibility to contribute to reconciliation.',
        'Sol Vé Custom Events respectfully acknowledges that we live, work, and gather on the traditional territories of the peoples of the Treaty 7 region in Southern Alberta, including the Blackfoot Confederacy (Siksika, Kainai, and Piikani Nations), the Tsuut’ina Nation, and the Îyârhe Nakoda Nations (Bearspaw, Chiniki, and Goodstoney First Nations). We also recognize the Métis Nation of Alberta, Region 3, whose history and contributions continue to enrich the communities we serve.',
        'To support reconciliation we must truly hear Indigenous oral and written history, share their dreams and celebrate their culture and future endeavors.',
        'As Sol Vé creates experiences across Canada and internationally, we are committed to respectfully acknowledging and honouring the Indigenous Peoples, traditional territories, and cultural histories of every place where we gather.',
        'For us, acknowledgement is more than words spoken at the beginning of an event. It is a commitment to gathering with humility, respect, and a willingness to learn. We believe that bringing people together carries a responsibility to honour the histories, cultures, traditions, and relationships that have shaped the places where we gather.',
        'As we continue to grow, we remain committed to listening, learning, building meaningful relationships, and creating experiences where respect, understanding, and belonging are thoughtfully woven into every gathering.',
      ],
      close: 'Because every meaningful gathering begins with respect.',
      link: {
        label: 'Support Indigenous Business',
        href: 'https://camsc.ca/indigenous-business-directory/',
      },
    },
    {
      id: 'inclusion',
      label: '2SLGBTQIA+',
      title: 'Inclusivity & Belonging',
      lead: 'We believe every person deserves to feel genuinely welcomed.',
      body: [
        'From the very beginning, Sol Vé has been founded on a simple belief: everyone should be welcomed with open arms. That belief continues to guide every experience we create, every relationship we build, and every space we are entrusted to design.',
        'Sol Vé Custom Events emphatically affirms our unwavering support for Two-Spirit, Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, Asexual, and all sexually and gender-diverse communities (2SLGBTQIA+). We are committed to providing experiences, services, and environments that are welcoming, respectful, and safe for 2SLGBTQIA+ individuals, their families, and their allies.',
        'We are deeply troubled that harassment, discrimination, prejudice, and bigotry related to gender identity, gender expression, and sexual orientation continue to cause harm in our communities. We believe every person deserves to live, celebrate, and gather free from discrimination, with the dignity and respect afforded to all.',
        'Sol Vé Custom Events is a company for all people. We celebrate the richness of humanity by welcoming people of every culture, heritage, identity, ability, age, faith, family structure, lived experience, perspective, gender identity, and sexual orientation.',
      ],
      close: 'Because the most meaningful gatherings are the ones where everyone belongs.',
    },
    {
      id: 'conservation',
      label: 'Conservation and Environmental',
      title: 'Environmental Responsibility',
      lead: 'We believe beautiful experiences can also be thoughtful ones.',
      body: [
        'From the beginning, Sol Vé has believed that creating meaningful experiences also carries a responsibility to care for the communities and environments that make those gatherings possible. While no event is without impact, we believe every thoughtful decision can contribute to a more sustainable future.',
        'We are committed to making environmentally conscious choices wherever possible. From responsible sourcing and reusable décor to reducing waste and thoughtfully considering the materials we use, we continually look for opportunities to lessen the environmental footprint of the experiences we create without compromising quality, creativity, or the guest experience.',
        'Our commitment extends beyond the events themselves. We believe that caring for our environment is an extension of caring for one another, recognizing that healthy communities and a healthy planet are deeply connected.',
        'As Sol Vé continues to grow, we remain committed to learning, evolving, and embracing sustainable practices that are practical, responsible, and meaningful.',
      ],
      close: 'By making thoughtful choices today, we help preserve the places where future generations will gather tomorrow.',
    },
  ],
  community: {
    title: 'Community Impact',
    lead: 'We believe the experiences we create should leave a positive impact long after the gathering has ended.',
    body: [
      'From the beginning, Sol Vé has believed that bringing people together carries an opportunity and a responsibility to strengthen the communities we serve. Whether through collaboration, volunteerism, philanthropy, advocacy, or creating opportunities for connection, we believe meaningful gathering has the power to inspire generosity, encourage belonging, and create lasting positive change.',
      'We are committed to building long-lasting relationships with like-minded individuals, businesses, charitable organizations, artists, community groups, and leaders who share our belief that when people work together with purpose, everyone benefits.',
      'Community impact is not something we do alongside our work. It is woven into how we work.',
      'This commitment has inspired collaborations that celebrate the arts, support charitable organizations, strengthen local businesses, elevate diverse voices, and create experiences that encourage people to connect with one another and contribute to something greater than themselves.',
    ],
    close: 'Because what communities create together begins with how they come together.',
  },
  principles: [
    { name: 'Stewardship', body: 'We honour every gathering as a moment entrusted to our care.' },
    { name: 'Intention', body: 'Every decision serves a purpose greater than itself.' },
    { name: 'Hospitality', body: 'Belonging is thoughtfully created, never assumed.' },
    { name: 'Craftsmanship', body: 'Excellence is found in the details others overlook.' },
    { name: 'Collaboration', body: 'The most meaningful experiences are created together.' },
    { name: 'Legacy', body: 'We measure success by what continues long after the gathering ends.' },
  ],
} as const


export const founder = {
  headline: 'Behind every extraordinary event is an extraordinary vision.',
  subheadline: 'Lynea Vaugeois Hetherington, Founder and Creative Director, Sol Vé Custom Events.',
  opening: [
    'Some people see events as occasions.',
    'Lynea Vaugeois Hetherington has always seen them as opportunities.',
  ],
  body: [
    'An opportunity to strengthen relationships. To celebrate culture. To honour tradition. To inspire collaboration. To create belonging. To bring people together in ways that continue to influence lives long after the gathering has ended.',
    'As the Founder of Sol Vé Custom Events, Lynea has spent her career exploring a simple but enduring idea: the way people gather shapes everything that follows.',
    "That belief has guided every chapter of Sol Vé's evolution. What began with thoughtfully designed celebrations grew into an experience and hospitality house founded on intentional gathering, genuine hospitality, and the belief that thoughtfully designed experiences can influence individuals, organizations, and communities alike.",
    'Over the years, that philosophy has found expression in many forms — from weddings and signature celebrations to workshops, philanthropic initiatives, and international convenings. Each serves a different purpose, yet all are guided by the same commitment: creating environments where people feel welcomed, valued, and inspired to contribute something meaningful.',
    'For Lynea, thoughtful design has never been solely about aesthetics. It is about stewardship.',
    'Every gathering represents a moment of trust. A family entrusts the beginning of a marriage. An organization entrusts its vision. A community entrusts its hopes. A charitable partner entrusts its mission. Every experience deserves to be approached with care, humility, craftsmanship, and respect for the people it is intended to serve.',
    'This philosophy ultimately led to the creation of initiatives such as the Mystic Moonlight Masquerade Fundraising Campaign. Different expressions. One enduring belief.',
    'Today, Lynea continues to steward Sol Vé with the same curiosity that inspired it from the beginning — always asking what becomes possible when people choose to come together with intention.',
  ],
  close: 'Because every meaningful gathering is an opportunity to shape everything that follows.',
  quote:
    'I got tired of watching extraordinary organizations fight for visibility alone. Sol Vé exists because the most important things in this city, the causes, the stories, the people, deserve a stage that matches them. We build that stage.',
  quoteAttribution: 'Lynea Vaugeois Hetherington, Founder, Sol Vé Custom Events',
} as const

export type Perspective = {
  slug: string
  title: string
  standfirst: string
  body: string[]
}

export const perspectives: Perspective[] = [
  {
    slug: 'convening-without-hierarchy',
    title: 'Convening Without Hierarchy',
    standfirst:
      'Because the most important voice in the room is often the one that hasn’t been heard yet.',
    body: [
      'Some of the most meaningful conversations I’ve witnessed have happened in rooms where titles quietly disappeared.',
      'Not because leadership wasn’t present. Because everyone present understood that wisdom is not reserved for the person at the front of the room.',
      'Too often, we design gatherings around hierarchy. The stage becomes more important than the audience. The speaker becomes more important than the listener. Expertise becomes something to present rather than something to exchange.',
      'I believe we’ve underestimated what happens when we intentionally design spaces where every person feels they have something valuable to contribute. A policymaker and a survivor. A CEO and a student. A researcher and a community volunteer. An artist and an engineer.',
      'When people gather with mutual respect rather than assumed hierarchy, something remarkable begins to happen. People stop defending positions and start exploring possibilities. They ask better questions. They listen differently. They become curious instead of certain.',
      'That doesn’t diminish leadership. It strengthens it. The best leaders I’ve met are rarely the people who speak the most. They are the people who create the conditions for others to speak.',
      'Perhaps the future of leadership isn’t about standing above the conversation. Perhaps it’s about thoughtfully designing the space where the conversation can happen.',
    ],
  },
  {
    slug: 'why-environment-shapes-dialogue',
    title: 'Why Environment Shapes Dialogue',
    standfirst: 'Before anyone says a word, the environment has already begun the conversation.',
    body: [
      'The room tells us whether we should feel welcome. Whether we should be inspired. Whether we should celebrate. Whether we should listen. Whether it is safe to speak honestly.',
      'We often think dialogue begins with language. I don’t believe it does. I think dialogue begins with experience.',
      'How close the chairs are placed. Whether people can see one another. The light in the room. The pace of the gathering. The music before the first guest arrives. The feeling created before the first introduction is made.',
      'These details are easy to dismiss because they seem small. Yet they quietly shape every interaction that follows.',
      'I’ve learned that people rarely remember the exact layout of a room. They remember how the room allowed them to feel. Comfortable. Curious. Included. Respected. Hopeful.',
      'When we thoughtfully design an environment, we are not decorating a space. We are influencing the quality of the conversations that will unfold within it.',
      'Perhaps the environment isn’t simply where dialogue happens. Perhaps it is one of the reasons dialogue succeeds.',
    ],
  },
  {
    slug: 'designing-spaces-for-difficult-conversations',
    title: 'Designing Spaces for Difficult Conversations',
    standfirst: 'Progress rarely begins with agreement. It begins with the willingness to remain at the table together.',
    body: [
      'Not every meaningful gathering is a celebration. Some begin with uncertainty. Some with disagreement. Some with grief. Some with questions that have no easy answers.',
      'Those are often the gatherings that matter most.',
      'It’s tempting to believe that difficult conversations are shaped by the people participating in them. I think they’re equally shaped by the environment surrounding them.',
      'People rarely speak openly when they feel judged. They rarely listen deeply when they feel hurried. And they rarely change their minds when they don’t feel respected.',
      'That is why thoughtful gathering matters. Not because it removes discomfort. But because it creates enough trust for people to remain present through it.',
      'Sometimes the greatest act of hospitality isn’t serving a meal. It’s creating a space where someone feels safe enough to tell the truth.',
      'I’ve come to believe that the role of a host is not to control the conversation. It is to care for the conditions in which honest conversation becomes possible.',
    ],
  },
  {
    slug: 'the-future-of-global-collaboration',
    title: 'The Future of Global Collaboration',
    standfirst: 'Every meaningful collaboration begins the same way. With people choosing to gather.',
    body: [
      'The world’s greatest challenges rarely exist within a single profession, a single organization, or a single country. Why should we expect the solutions to?',
      'For generations, we’ve become increasingly specialized. We’ve developed extraordinary expertise in individual disciplines. But the challenges we face today ask something different of us.',
      'They ask us to connect those disciplines. To bring together people who would not normally share the same room. To create places where governments can learn from communities, where researchers can learn from lived experience, where business leaders can learn from artists, and where every perspective is treated as a contribution rather than a competition.',
      'Collaboration is often described as working together. I think it begins much earlier than that. It begins with creating the conditions where people are willing to trust one another enough to imagine something they could never accomplish alone.',
      'That kind of collaboration cannot be rushed. It cannot be manufactured. It must be thoughtfully designed.',
      'Perhaps the future won’t be shaped by the organizations with the greatest resources. Perhaps it will be shaped by the people who become the best at bringing others together with purpose.',
    ],
  },
  {
    slug: 'beauty-is-the-invitation',
    title: 'Beauty Is the Invitation',
    standfirst: 'At Sol Vé, beauty is never the destination. It is where meaningful experiences begin.',
    body: [
      'There is a common misconception that beauty is the purpose of an experience. We believe the opposite.',
      'Beauty is the invitation. It is the quiet moment that encourages people to pause, become present, and open themselves to what is about to unfold. It creates anticipation before a word is spoken, comfort before a guest is welcomed, and emotion before a memory is made.',
      'But beauty alone is never enough.',
      'The most extraordinary experiences are remembered not simply because they were beautiful, but because they created something meaningful. A conversation that changed a perspective. A reunion that strengthened a family. A celebration that honoured generations. A gathering that inspired generosity. A room that made every guest feel they belonged.',
      'Thoughtful design has the power to influence how people experience one another. Every detail matters because every detail contributes to the feeling people carry with them long after the gathering has ended.',
    ],
  },
  {
    slug: 'the-most-important-thing-we-design',
    title: 'The Most Important Thing We Design Is Not the Décor',
    standfirst: 'Great design is not measured by how impressive a room looks. It is measured by how naturally people connect within it.',
    body: [
      'When people think about event design, they often think about flowers, lighting, tablescapes, colour palettes, or architecture.',
      'We think about people.',
      'Before selecting a single flower or placing a single chair, we ask different questions. How should people feel when they arrive? How can this space encourage conversation? How can it honour culture, family, or tradition? How can it create a sense of belonging?',
      'The answers to those questions shape every design decision that follows.',
      'When design is intentional, beauty becomes more than something people admire. It becomes something they experience.',
      'That is the difference between decorating a room and designing how people gather.',
    ],
  },
  {
    slug: 'why-we-still-gather',
    title: 'Why We Still Gather',
    standfirst: 'Perhaps that is why people have always gathered. Not simply to celebrate what already exists, but to create what comes next.',
    body: [
      'In a world increasingly connected through technology, gathering in person has never been more valuable.',
      'Some of life’s most important moments cannot be experienced through a screen. A grandparent embracing a grandchild for the first time. Two families becoming one. Friends celebrating decades of shared memories. Communities rallying around a cause. Leaders sitting together to solve problems that no single organization can solve alone.',
      'Gathering reminds us that relationships are built through presence. That ideas grow through conversation. That trust develops over shared experiences. That belonging begins when people feel seen, heard, and welcomed.',
      'Every meaningful gathering becomes part of a larger story. It influences the memories people carry, the relationships they strengthen, and the possibilities they create together.',
    ],
  },
]

export const press = {
  awards: [
    { name: 'Best Bespoke Wedding & Event Design Company', body: 'Lux Life Awards, 2026' },
    { name: 'Artful Event Storytelling Excellence Award', body: 'Lux Life Awards, 2026' },
    { name: 'Best Booth', body: 'Wedding Fair' },
    { name: 'Best Decoration', body: 'Awarding organization pending confirmation' },
  ],
  features: [
    { name: 'HUM TV', body: 'The World In Vogue fashion show, featuring Zainab Chottani' },
    { name: 'AVOLA Magazine', body: 'Editorial feature' },
    { name: 'REDTV Canada', body: 'Broadcast feature' },
    { name: 'Canada Council for the Arts', body: 'Arts and culture recognition' },
  ],
  publications: [
    { name: 'Bridal Fantasy', body: 'Two features, two years, two cities — 2019 / 2020' },
    { name: "Men's Vow Magazine", body: 'Editorial feature' },
    { name: 'Dancing With Her', body: 'Editorial feature' },
    { name: 'Dance BBG', body: 'Blog feature' },
  ],
} as const
