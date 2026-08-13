# -*- coding: utf-8 -*-
"""Sol Vé Custom Events — site copy.

Source of truth: "Sol Vé Custom Events Website order and messaging" (client PDF).
Copy below is verbatim from that document. Do not paraphrase; if a line reads oddly,
it is the client's voice and it stays.

Kept separate from build_site.py so the client can read and revise the words without
reading a generator.

House rules that the build enforces (check_site.py):
  - the words "luxury", "world-class", "opulent", "high-end" do not appear.
    The brief was opulence *without* the words; the PDF's own writing never uses one.
  - "elegance" IS permitted — the PDF uses it in Where It Began, deliberately, to
    argue that elegance is not what makes a gathering matter.
"""

# ── Contact ────────────────────────────────────────────────────
EMAIL = "info@solvecustomevents.com"
PHONE_DISPLAY = "1-587-582-3853"
PHONE_HREF = "+15875823853"
LOCATION = "Calgary, Alberta, Canada"
LOCATION_SHORT = "Calgary, Alberta"
SERVING = "Serving clients throughout Canada and internationally."

# LinkedIn: the client confirmed a Sol Vé Custom Events company page exists and is
# sending the URL. Until it lands this placeholder fails check_site.py rule 9, which
# is deliberate — the old site linked Lynea's personal profile and it must not ship
# that way again. Replace the whole string, keep the /company/ path.
LINKEDIN_URL = "https://www.linkedin.com/company/REPLACE-WITH-SOLVE-COMPANY-PAGE"

SOCIALS = [
    ("Instagram", "https://www.instagram.com/solvecustomevents/",
     '<path d="M8 1.4c2.15 0 2.4.01 3.25.05.78.04 1.2.17 1.49.28.37.14.64.32.92.6.28.28.46.55.6.92.11.28.24.7.28 1.49.04.85.05 1.1.05 3.25s-.01 2.4-.05 3.25c-.04.78-.17 1.2-.28 1.49a2.5 2.5 0 0 1-.6.92c-.28.28-.55.46-.92.6-.28.11-.7.24-1.49.28-.85.04-1.1.05-3.25.05s-2.4-.01-3.25-.05c-.78-.04-1.2-.17-1.49-.28a2.5 2.5 0 0 1-.92-.6 2.5 2.5 0 0 1-.6-.92c-.11-.28-.24-.7-.28-1.49C1.41 10.4 1.4 10.15 1.4 8s.01-2.4.05-3.25c.04-.78.17-1.2.28-1.49.14-.37.32-.64.6-.92.28-.28.55-.46.92-.6.28-.11.7-.24 1.49-.28C5.6 1.41 5.85 1.4 8 1.4M8 0C5.83 0 5.55.01 4.7.05 3.85.09 3.27.22 2.76.42a3.9 3.9 0 0 0-1.42.92A3.9 3.9 0 0 0 .42 2.76C.22 3.27.09 3.85.05 4.7.01 5.55 0 5.83 0 8s.01 2.45.05 3.3c.04.85.17 1.43.37 1.94.2.52.48.96.92 1.42.45.44.9.72 1.42.92.51.2 1.09.33 1.94.37.85.04 1.13.05 3.3.05s2.45-.01 3.3-.05c.85-.04 1.43-.17 1.94-.37a3.9 3.9 0 0 0 1.42-.92c.44-.45.72-.9.92-1.42.2-.51.33-1.09.37-1.94.04-.85.05-1.13.05-3.3s-.01-2.45-.05-3.3c-.04-.85-.17-1.43-.37-1.94a3.9 3.9 0 0 0-.92-1.42A3.9 3.9 0 0 0 13.24.42C12.73.22 12.15.09 11.3.05 10.45.01 10.17 0 8 0Zm0 3.89a4.11 4.11 0 1 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.78a2.67 2.67 0 1 1 0-5.34 2.67 2.67 0 0 1 0 5.34Zm5.23-6.94a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0Z"/>'),
    ("Facebook", "https://www.facebook.com/solvecustomevents/",
     '<path d="M16 8.05A8.02 8.02 0 0 0 8 0C3.58 0 0 3.6 0 8.05A8.04 8.04 0 0 0 6.75 16v-5.62H4.72V8.05h2.03V6.28c0-2.02 1.2-3.13 3.02-3.13.88 0 1.79.16 1.79.16v1.98h-1c-1 0-1.31.62-1.31 1.26v1.5h2.22l-.35 2.33H9.25V16A8.04 8.04 0 0 0 16 8.05Z"/>'),
    ("Pinterest", "https://www.pinterest.com/solvecustomevents",
     '<path d="M8 0a8 8 0 0 0-2.92 15.45c-.07-.63-.13-1.6.03-2.29l.94-3.97s-.24-.48-.24-1.18c0-1.1.64-1.93 1.44-1.93.68 0 1 .51 1 1.12 0 .68-.43 1.7-.66 2.64-.19.79.4 1.44 1.18 1.44 1.42 0 2.51-1.5 2.51-3.66 0-1.91-1.37-3.25-3.34-3.25a3.46 3.46 0 0 0-3.61 3.47c0 .69.27 1.42.6 1.82a.24.24 0 0 1 .05.23l-.22.91c-.04.15-.12.18-.27.11-1-.47-1.63-1.93-1.63-3.1 0-2.53 1.84-4.85 5.3-4.85 2.78 0 4.94 1.98 4.94 4.63 0 2.76-1.74 4.99-4.16 4.99-.81 0-1.58-.42-1.84-.92l-.5 1.9c-.18.7-.67 1.57-1 2.1A8 8 0 1 0 8 0Z"/>'),
    ("LinkedIn", LINKEDIN_URL,
     '<path d="M14.82 0H1.18A1.17 1.17 0 0 0 0 1.16v13.68A1.17 1.17 0 0 0 1.18 16h13.64A1.17 1.17 0 0 0 16 14.84V1.16A1.17 1.17 0 0 0 14.82 0ZM4.75 13.63H2.37V6h2.38ZM3.56 4.96a1.38 1.38 0 1 1 0-2.75 1.38 1.38 0 0 1 0 2.75Zm10.07 8.67h-2.37V9.92c0-.88-.02-2.02-1.24-2.02-1.24 0-1.43.96-1.43 1.96v3.77H6.22V6H8.5v1.04h.03c.32-.6 1.09-1.24 2.25-1.24 2.4 0 2.85 1.58 2.85 3.64Z"/>'),
]

MMM_SITE = "https://www.mysticmoonlightmasquerade.com"
MMM_TICKETS = ("https://www.eventbrite.ca/e/"
               "mystic-moonlight-masquerade-gala-ball-tickets-1990348600242")

# ── Home ───────────────────────────────────────────────────────
HOME_STATEMENT = "We design how people gather."
HOME_SUB = "Because the way people gather shapes everything that follows."
HOME_CTA_PRIMARY = ("Begin your Journey", "/contact/")
HOME_CTA_SECONDARY = ("Discover Experiences", "/divisions/")

# ── Foundation ─────────────────────────────────────────────────
FOUNDATION = [
    "Every meaningful gathering begins long before people arrive and continues long "
    "after they leave. It influences relationships, ideas, cultures, communities, and "
    "the possibilities that emerge when people come together with intention.",
    "At Sol Vé, we believe thoughtful design and genuine hospitality are not simply "
    "acts of service—they are acts of stewardship. Every environment we create is an "
    "opportunity to foster belonging, encourage meaningful connection, and shape "
    "experiences that extend far beyond the occasion itself.",
    "This is the foundation upon which every Sol Vé experience is created, every "
    "partnership is formed, and every future initiative is built.",
]

SOLVE_WAY = [
    "We design how people gather because we believe the way people come together "
    "shapes everything that follows.",
    "Every gathering is entrusted to us with purpose. Whether celebrating a milestone, "
    "strengthening a relationship, advancing an idea, supporting a community, or "
    "convening leaders to address the world's most pressing challenges, we recognize "
    "that what happens within those moments has the potential to extend far beyond the "
    "occasion itself.",
    "That responsibility shapes the way we work.",
    "We approach every experience as stewards of the moments entrusted to us. Through "
    "thoughtful design, genuine hospitality, careful craftsmanship, and intentional "
    "collaboration, we create environments where people feel welcomed, valued, and "
    "inspired to be fully present.",
    "We believe the most meaningful experiences are never measured solely by their "
    "beauty or complexity. They are measured by the connections they strengthen, the "
    "conversations they inspire, and the lasting impact they have on the people who "
    "share them.",
    "This is the standard that guides every decision we make, every relationship we "
    "build, and every experience we are privileged to create.",
]
SOLVE_WAY_CLOSE = "This is the Sol Vé Way."

BEYOND_OPEN = [
    "Not every gathering shapes what follows.",
    "The ones that do are never left to chance.",
    "They are thoughtfully designed. Carefully stewarded. Intentionally experienced.",
]
BEYOND_BODY = [
    "At Sol Vé, we understand that every gathering carries something greater than the "
    "occasion itself. A wedding becomes the beginning of a family. A celebration "
    "becomes part of a personal story. A workshop becomes the beginning of a new "
    "perspective. A philanthropic event becomes an opportunity to strengthen a "
    "community. A conference becomes the place where conversations become "
    "collaboration and ideas become action.",
    "These are the moments entrusted to us.",
    "They deserve more than exceptional planning.",
    "They deserve thoughtful stewardship.",
    "This belief shapes every decision we make. Every environment we create. Every "
    "relationship we build. Every detail we consider.",
]
# The PDF's three antitheses. Set as a triptych — they are the argument of the page.
BEYOND_TRIPTYCH = [
    ("Beauty is never the destination.", "It is the invitation."),
    ("Hospitality is never a service.", "It is how people know they belong."),
    ("Design is never decoration.",
     "It is the intentional creation of experiences that reflect purpose, strengthen "
     "connection, and create the conditions for what comes next."),
]
BEYOND_CLOSE = [
    "Whether welcoming two families into one, bringing communities together around a "
    "shared purpose, or convening leaders to address global challenges, our role "
    "remains the same:",
    "To thoughtfully design how people gather so that what follows is worthy of why "
    "they came together in the first place.",
    "We are entrusted with moments that shape what follows.",
]
BEYOND_SIGNOFF = "That is why Sol Vé."

PRINCIPLES = [
    ("Stewardship", "We honour every gathering as a moment entrusted to our care."),
    ("Intention", "Every decision serves a purpose greater than itself."),
    ("Hospitality", "Belonging is thoughtfully created, never assumed."),
    ("Craftsmanship", "Excellence is found in the details others overlook."),
    ("Collaboration", "The most meaningful experiences are created together."),
    ("Legacy", "We measure success by what continues long after the gathering ends."),
]

# ── Our Commitments ────────────────────────────────────────────
COMMITMENTS_QUOTE = ("DIVERSITY is having a seat at the table, INCLUSION is having a "
                     "voice, BELONGING is having that voice be heard.")
COMMITMENTS_QUOTE_CITE = "Author unknown"

COMMITMENTS_INTRO = [
    "The experiences we create are shaped not only by how we gather, but by the "
    "responsibility we carry to the people, communities, and places that welcome us.",
    "These commitments guide how we work, how we collaborate, and how we contribute "
    "beyond every experience we create.",
]

# Three commitments, equal in every respect. The client's instruction was explicit:
# equal size, equal spacing, none more important than another. The `lead` blocks are
# deliberately matched in length so the three boxes carry the same visual weight; the
# remainder of each — every word of it — sits behind the expander.
COMMITMENTS = [
    {
        "title": "Reconciliation",
        "subtitle": "Land Acknowledgement",
        "lead": [
            "Every meaningful gathering begins with respect.",
            "Sol Vé Custom Events respectfully acknowledges that we live, work, and "
            "gather on the traditional territories of the peoples of the Treaty 7 "
            "region in Southern Alberta, including the Blackfoot Confederacy (Siksika, "
            "Kainai, and Piikani Nations), the Tsuut'ina Nation, and the Îyârhe Nakoda "
            "Nations (Bearspaw, Chiniki, and Goodstoney First Nations). We also "
            "recognize the Métis Nation of Alberta, Region 3, whose history and "
            "contributions continue to enrich the communities we serve.",
        ],
        "more": [
            "As Sol Vé creates experiences across Canada and internationally, we are "
            "committed to respectfully acknowledging and honouring the Indigenous "
            "Peoples, traditional territories, and cultural histories of every place "
            "where we gather.",
            "For us, acknowledgement is more than words spoken at the beginning of an "
            "event. It is a commitment to gathering with humility, respect, and a "
            "willingness to learn. We believe that bringing people together carries a "
            "responsibility to honour the histories, cultures, traditions, and "
            "relationships that have shaped the places where we gather.",
            "As we continue to grow, we remain committed to listening, learning, "
            "building meaningful relationships, and creating experiences where respect, "
            "understanding, and belonging are thoughtfully woven into every gathering.",
            "Because every meaningful gathering begins with respect.",
        ],
        "link": ("Support Indigenous Business",
                 "https://camsc.ca/indigenous-business-directory/"),
    },
    {
        "title": "2SLGBTQIA+",
        "subtitle": "Inclusivity and Belonging",
        "lead": [
            "We believe every person deserves to feel genuinely welcomed.",
            "Sol Vé Custom Events emphatically affirms our unwavering support for "
            "Two-Spirit, Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, "
            "Intersex, Asexual, and all sexually and gender-diverse communities "
            "(2SLGBTQIA+). We are committed to providing experiences, services, and "
            "environments that are welcoming, respectful, and safe for 2SLGBTQIA+ "
            "individuals, their families, and their allies.",
        ],
        "more": [
            "From the very beginning, Sol Vé has been founded on a simple belief: "
            "everyone should be welcomed with open arms. That belief continues to guide "
            "every experience we create, every relationship we build, and every space "
            "we are entrusted to design.",
            "We are deeply troubled that harassment, discrimination, prejudice, and "
            "bigotry related to gender identity, gender expression, and sexual "
            "orientation continue to cause harm in our communities. We believe every "
            "person deserves to live, celebrate, and gather free from discrimination, "
            "with the dignity and respect afforded to all.",
            "Sol Vé Custom Events is a company for all people. Our leadership and team "
            "are committed to social equality, reconciliation, anti-racism, and "
            "creating environments where diversity is embraced, discrimination is "
            "challenged, and every individual feels respected, valued, and that they "
            "truly belong.",
            "We celebrate the richness of humanity by welcoming people of every culture, "
            "heritage, identity, ability, age, faith, family structure, lived "
            "experience, perspective, gender identity, and sexual orientation.",
            "Because the most meaningful gatherings are the ones where everyone belongs.",
        ],
        "link": None,
    },
    {
        "title": "Conservation and Environmental",
        "subtitle": "Environmental Responsibility",
        "lead": [
            "We believe beautiful experiences can also be thoughtful ones.",
            "From the beginning, Sol Vé has believed that creating meaningful "
            "experiences also carries a responsibility to care for the communities and "
            "environments that make those gatherings possible. While no event is "
            "without impact, we believe every thoughtful decision can contribute to a "
            "more sustainable future.",
        ],
        "more": [
            "We are committed to making environmentally conscious choices wherever "
            "possible. From responsible sourcing and reusable décor to reducing waste "
            "and thoughtfully considering the materials we use, we continually look for "
            "opportunities to lessen the environmental footprint of the experiences we "
            "create without compromising quality, creativity, or the guest experience.",
            "Our commitment extends beyond the events themselves. We believe that caring "
            "for our environment is an extension of caring for one another, recognizing "
            "that healthy communities and a healthy planet are deeply connected.",
            "As Sol Vé continues to grow, we remain committed to learning, evolving, and "
            "embracing sustainable practices that are practical, responsible, and "
            "meaningful. We understand that sustainability is a journey of continuous "
            "improvement, and we believe every positive step contributes to something "
            "greater.",
            "By making thoughtful choices today, we help preserve the places where "
            "future generations will gather tomorrow.",
        ],
        "link": None,
    },
]

COMMUNITY_IMPACT = {
    "title": "Community Impact",
    "lead": "We believe the experiences we create should leave a positive impact long "
            "after the gathering has ended.",
    "body": [
        "From the beginning, Sol Vé has believed that bringing people together carries "
        "an opportunity and a responsibility to strengthen the communities we serve. "
        "Whether through collaboration, volunteerism, philanthropy, advocacy, or "
        "creating opportunities for connection, we believe meaningful gathering has the "
        "power to inspire generosity, encourage belonging, and create lasting positive "
        "change.",
        "We are committed to building long-lasting relationships with like-minded "
        "individuals, businesses, charitable organizations, artists, community groups, "
        "and leaders who share our belief that when people work together with purpose, "
        "everyone benefits.",
        "This commitment has inspired collaborations that celebrate the arts, support "
        "charitable organizations, strengthen local businesses, elevate diverse voices, "
        "and create experiences that encourage people to connect with one another and "
        "contribute to something greater than themselves.",
        "As Sol Vé continues to evolve, so too will our commitment to supporting "
        "stronger, healthier, more connected communities. We believe every gathering has "
        "the potential to leave more than a memory, it has the potential to leave a "
        "legacy.",
    ],
    "close": "Because what communities create together begins with how they come "
             "together.",
    "aside": "Community impact is not something we do alongside our work. It is woven "
             "into how we work.",
}

# ── What We Create ─────────────────────────────────────────────
WHAT_WE_CREATE_OPEN = [
    "Every gathering begins with a different purpose.",
    "Some celebrate love.",
    "Some honour life's defining moments.",
    "Some inspire learning, creativity, and personal growth.",
    "Some strengthen organizations and teams.",
    "Some unite communities around a shared cause.",
    "Others bring together leaders to shape meaningful change.",
]
WHAT_WE_CREATE_TURN = "While every experience is unique, each is guided by the same belief:"
WHAT_WE_CREATE_BELIEF = ("We design how people gather because the way people gather "
                         "shapes everything that follows.")
WHAT_WE_CREATE_CLOSE = (
    "From intimate celebrations to international convenings, Sol Vé creates experiences "
    "where people connect more deeply, cultures are celebrated, ideas are exchanged, "
    "communities are strengthened, and new possibilities begin.")

# Six Divisions of Experiences. Names and copy from the PDF; slugs preserved from the
# existing site so no URL breaks.
DIVISIONS = [
    {
        "slug": "event-design",
        "name": "Design and Stylization",
        "short": "Thoughtfully crafted environments that bring vision, beauty, and "
                 "purpose together.",
        "because": None,
        "headline": "The room has already begun the conversation.",
        "body": [
            "Beautiful spaces do more than capture attention—they shape how people "
            "experience a gathering.",
            "Our custom design and stylization services transform ideas into "
            "thoughtfully curated environments where every detail serves a purpose. "
            "From concept development and décor to floral design, furnishings, "
            "lighting, and visual storytelling, we create spaces that reflect your "
            "vision while enhancing the experience of every guest.",
        ],
        "notes": [
            ("Concept to execution", "We do not hand off. We see it through."),
            ("Cultural fluency",
             "We design within and across cultural traditions with genuine respect."),
            ("Artistic ownership",
             "All creative concepts, design ideas, and visual direction remain the "
             "property of Sol Vé Custom Events."),
        ],
    },
    {
        "slug": "weddings",
        "name": "Weddings",
        "short": "Celebrations that honour love, family, culture, and the beginning of "
                 "a shared future.",
        "because": "Because the way we gather becomes the memories we carry for a "
                   "lifetime.",
        "headline": "A wedding is more than a celebration. It is the beginning of a "
                    "family's story.",
        "body": [
            "We create timeless wedding experiences that honour love, family, culture, "
            "and tradition with thoughtful planning, genuine hospitality, and "
            "intentional design.",
            "Every celebration is crafted to reflect the people at its heart, creating "
            "memories that will be treasured for generations.",
        ],
        "notes": [],
        "faq": [
            ("When should you hire an event planner?",
             "The best answer is as soon as possible. Event planners are great "
             "resources that can help you with vendor and location settings. In "
             "addition, they often save clients both financially and in time."),
            ("Do you take on destination events, and will the planner attend in person?",
             "Yes to both. We offer planning and coordination services within Canada, "
             "the United States, and around the world. With global connections and a "
             "hands-on approach, we make sure your event holds up in any location."),
            ("Can you help me surprise my partner when I propose?",
             "Absolutely. Surprise engagements are a specialty. Whether it is setting "
             "the mood or full design and facilitation, the sky is literally the limit."),
        ],
    },
    {
        "slug": "signature-moments",
        "name": "Signature Moments",
        "short": "Bespoke experiences created to celebrate life's defining milestones.",
        "because": "Because life's most meaningful moments deserve to be experienced "
                   "with intention.",
        "headline": "Some occasions deserve more than a celebration. They deserve to "
                    "become unforgettable memories.",
        "body": [
            "Whether marking a milestone, anniversary, gala, private celebration, or "
            "life's defining moments, we create bespoke experiences that reflect your "
            "story and leave a lasting impression on everyone who shares them.",
        ],
        "notes": [],
    },
    {
        "slug": "workshops",
        "name": "Workshops and Curated Experiences",
        "short": "Immersive gatherings designed to inspire learning, creativity, and "
                 "meaningful connection.",
        "because": "Because the way people gather shapes the relationships, ideas, and "
                   "leadership that move organizations forward.",
        "headline": "The most meaningful learning happens when people feel inspired to "
                    "participate.",
        "body": [
            "We design immersive workshops and curated experiences that encourage "
            "creativity, collaboration, wellness, discovery, and authentic human "
            "connection.",
            "Every experience is thoughtfully developed to foster engagement, meaningful "
            "conversation, and lasting impact.",
        ],
        "notes": [
            ("Portfolio development",
             "Structured programmes for industry professionals developing their "
             "creative portfolios."),
            ("Wellness retreats",
             "Curated experiences that restore mind, body, and creative spirit."),
            ("Corporate retreats",
             "Offsites that build connection and reset perspective for a team."),
            ("Destination training",
             "Immersive learning in extraordinary settings worldwide."),
        ],
    },
    {
        "slug": "conferences",
        "name": "Conferences and International Events",
        "short": "Purpose-driven convenings where ideas are exchanged, partnerships are "
                 "formed, and meaningful progress begins.",
        "because": "Because the way leaders gather shapes the conversations, "
                   "collaborations, and decisions that influence the world.",
        "headline": "The way leaders gather influences what becomes possible together.",
        "body": [
            "From executive retreats and industry conferences to international summits "
            "and multi-day experiences, we create environments where ideas become "
            "partnerships, conversations become collaboration, and shared purpose "
            "inspires meaningful progress.",
            "We are based in Calgary and produce internationally, working with "
            "established AV and production partners so the room holds up at any scale.",
        ],
        "notes": [],
    },
    {
        "slug": "fundraising",
        "name": "Fundraising Campaign Events",
        "short": "Experiences that unite communities, celebrate generosity, and create "
                 "lasting impact through philanthropy.",
        "because": "Because the way communities gather shapes the future they create "
                   "together.",
        "headline": "Celebration has the power to strengthen communities.",
        "body": [
            "We believe fundraising should inspire connection as much as generosity.",
            "By thoughtfully bringing together charitable organizations, businesses, "
            "artists, sponsors, volunteers, and communities, we create experiences that "
            "celebrate purpose, encourage collaboration, and help build sustainable "
            "support for causes that create lasting social impact.",
        ],
        "notes": [],
    },
]

DIVISIONS_CLOSE = [
    "Every experience is uniquely its own.",
    "The philosophy that guides it remains the same.",
]

# ── Where It Began ─────────────────────────────────────────────
WHERE_IT_BEGAN = [
    "Every meaningful gathering begins long before people arrive.",
    "It begins with a decision.",
    "A decision to celebrate. To listen. To learn. To heal. To collaborate. To honour. "
    "To imagine what might become possible when people choose to come together.",
    "From that simple observation, Sol Vé was born.",
    "Over time, Founder Lynea Vaugeois Hetherington came to recognize that the "
    "gatherings that leave the greatest impression are rarely defined by their scale, "
    "their elegance, or their complexity. They are remembered for how they make people "
    "feel, the relationships they strengthen, the perspectives they broaden, and the "
    "possibilities they create long after the occasion has ended.",
    "That realization transformed the purpose of her work.",
    "The gathering was never the destination.",
    "It was where everything else began.",
    "What began with thoughtfully designing celebrations became a lifelong commitment "
    "to designing how people gather. Weddings became opportunities to honour families "
    "and traditions. Hospitality became a way of creating belonging. Workshops became "
    "spaces for learning and discovery. Philanthropic experiences became catalysts for "
    "stronger communities. Conferences became places where ideas, partnerships, and "
    "leadership could shape meaningful progress.",
    "As the philosophy continued to evolve, so did the work.",
    "That same belief would eventually find expression through initiatives such as the "
    "Mystic Moonlight Masquerade Fundraising Campaign.",
    "Sol Vé began with a belief that thoughtfully designed gatherings can shape what "
    "follows. Today, that belief is expressed through celebrations, hospitality, "
    "philanthropy, and convening. Tomorrow, it will continue to evolve wherever "
    "intentional gathering creates new possibilities for people, communities, and "
    "society.",
]

# ── Meet the Founder ───────────────────────────────────────────
FOUNDER_NAME = "Lynea Vaugeois Hetherington"
FOUNDER_ROLE = "Founder and Creative Director"

MEET_FOUNDER_OPEN = [
    "Some people see events as occasions.",
    "Lynea Vaugeois Hetherington has always seen them as opportunities.",
]
MEET_FOUNDER = [
    "An opportunity to strengthen relationships. To celebrate culture. To honour "
    "tradition. To inspire collaboration. To create belonging. To bring people together "
    "in ways that continue to influence lives long after the gathering has ended.",
    "As the Founder of Sol Vé Custom Events, Lynea has spent her career exploring a "
    "simple but enduring idea: the way people gather shapes everything that follows.",
    "That belief has guided every chapter of Sol Vé's evolution. What began with "
    "thoughtfully designed celebrations grew into an experience and hospitality house "
    "founded on intentional gathering, genuine hospitality, and the belief that "
    "thoughtfully designed experiences can influence individuals, organizations, and "
    "communities alike.",
    "Over the years, that philosophy has found expression in many forms—from weddings "
    "and signature celebrations to workshops, philanthropic initiatives, and "
    "international convenings. Each serves a different purpose, yet all are guided by "
    "the same commitment: creating environments where people feel welcomed, valued, and "
    "inspired to contribute something meaningful.",
    "For Lynea, thoughtful design has never been solely about aesthetics.",
    "It is about stewardship.",
    "Every gathering represents a moment of trust. A family entrusts the beginning of a "
    "marriage. An organization entrusts its vision. A community entrusts its hopes. A "
    "charitable partner entrusts its mission. Every experience deserves to be approached "
    "with care, humility, craftsmanship, and respect for the people it is intended to "
    "serve.",
    "This philosophy ultimately led to the creation of initiatives such as the Mystic "
    "Moonlight Masquerade Fundraising Campaign.",
    "Today, Lynea continues to steward Sol Vé with the same curiosity that inspired it "
    "from the beginning—always asking what becomes possible when people choose to come "
    "together with intention.",
]
MEET_FOUNDER_CLOSE = ("Because every meaningful gathering is an opportunity to shape "
                      "everything that follows.")

# The founder photograph brief, straight from the PDF. Rendered on the reserved plate
# so the requirement is visible to whoever fills it.
FOUNDER_PHOTO_BRIEF = [
    "greeting guests",
    "speaking with a couple",
    "collaborating with a team",
    "quietly observing a room she has helped create",
]

# ── Portfolio ──────────────────────────────────────────────────
PORTFOLIO_INTRO = ("A selection of Sol Vé work. Each project is recorded the same way: "
                   "why people came together, what the gathering had to carry, and what "
                   "it left behind.")

# The PDF specifies exactly what a project entry must contain.
PROJECT_FIELDS = ["The purpose", "The story", "The design philosophy",
                  "Photography", "Client outcomes"]

PORTFOLIO_CATEGORIES = [
    ("weddings", "Weddings"),
    ("signature-moments", "Signature Moments"),
    ("fundraising", "Fundraising Campaigns"),
    ("conferences", "Conferences and Leadership Events"),
    ("event-design", "Design and Stylization"),
    ("workshops", "Workshops and Curated Experiences"),
]

# ── Press ──────────────────────────────────────────────────────
FEATURES = [
    "AVOLA Magazine",
    "REDTV Canada",
    "Bridal Fantasy",
    "Dancing With Her",
    "Men's Vow Magazine",
]

AWARDS = [
    ("Best Bespoke Wedding and Event Design Company", "Lux Life Awards 2026"),
    ("Artful Event Storytelling Excellence Award", "Lux Life Awards 2026"),
]

# Seven roles, from the PDF. Quotes come from the client; until they arrive each slot
# renders as a reserved plate rather than an invented testimonial.
TESTIMONIAL_ROLES = [
    "Bride and Groom", "Corporate Executive", "Charity Partner", "Performer",
    "Venue Partner", "Sponsor", "Community Leader",
]

# ── Perspectives (the journal) ─────────────────────────────────
# Verbatim essays from the PDF. "beat" marks the short declarative lines that are this
# writer's signature; the stylesheet gives them room rather than running them together.
ESSAYS = [
    {
        "slug": "convening-without-hierarchy",
        "title": "Convening Without Hierarchy",
        "standfirst": "The most important voice in the room is often the one that "
                      "hasn't been heard yet.",
        "body": [
            ("p", "Some of the most meaningful conversations I've witnessed have "
                  "happened in rooms where titles quietly disappeared."),
            ("beat", "Not because leadership wasn't present."),
            ("p", "Because everyone present understood that wisdom is not reserved for "
                  "the person at the front of the room."),
            ("p", "Too often, we design gatherings around hierarchy. The stage becomes "
                  "more important than the audience. The speaker becomes more important "
                  "than the listener. Expertise becomes something to present rather "
                  "than something to exchange."),
            ("p", "I believe we've underestimated what happens when we intentionally "
                  "design spaces where every person feels they have something valuable "
                  "to contribute."),
            ("beat", "A policymaker and a survivor. A CEO and a student. A researcher "
                     "and a community volunteer. An artist and an engineer."),
            ("p", "When people gather with mutual respect rather than assumed hierarchy, "
                  "something remarkable begins to happen. People stop defending "
                  "positions and start exploring possibilities. They ask better "
                  "questions. They listen differently. They become curious instead of "
                  "certain."),
            ("beat", "That doesn't diminish leadership. It strengthens it."),
            ("p", "The best leaders I've met are rarely the people who speak the most. "
                  "They are the people who create the conditions for others to speak."),
            ("p", "Perhaps the future of leadership isn't about standing above the "
                  "conversation. Perhaps it's about thoughtfully designing the space "
                  "where the conversation can happen."),
            ("beat", "Because the most important voice in the room is often the one "
                     "that hasn't been heard yet."),
        ],
    },
    {
        "slug": "why-environment-shapes-dialogue",
        "title": "Why Environment Shapes Dialogue",
        "standfirst": "Before anyone says a word, the environment has already begun "
                      "the conversation.",
        "body": [
            ("p", "Before anyone says a word, the environment has already begun the "
                  "conversation."),
            ("p", "The room tells us whether we should feel welcome. Whether we should "
                  "be inspired. Whether we should celebrate. Whether we should listen. "
                  "Whether it is safe to speak honestly."),
            ("beat", "We often think dialogue begins with language. I don't believe it "
                     "does. I think dialogue begins with experience."),
            ("p", "How close the chairs are placed. Whether people can see one another. "
                  "The light in the room. The pace of the gathering. The music before "
                  "the first guest arrives. The feeling created before the first "
                  "introduction is made."),
            ("p", "These details are easy to dismiss because they seem small. Yet they "
                  "quietly shape every interaction that follows."),
            ("p", "I've learned that people rarely remember the exact layout of a room. "
                  "They remember how the room allowed them to feel."),
            ("beat", "Comfortable. Curious. Included. Respected. Hopeful."),
            ("p", "When we thoughtfully design an environment, we are not decorating a "
                  "space. We are influencing the quality of the conversations that will "
                  "unfold within it."),
            ("beat", "Perhaps the environment isn't simply where dialogue happens. "
                     "Perhaps it is one of the reasons dialogue succeeds."),
        ],
    },
    {
        "slug": "designing-spaces-for-difficult-conversations",
        "title": "Designing Spaces for Difficult Conversations",
        "standfirst": "Progress rarely begins with agreement. It begins with the "
                      "willingness to remain at the table together.",
        "body": [
            ("beat", "Not every meaningful gathering is a celebration."),
            ("p", "Some begin with uncertainty. Some with disagreement. Some with grief. "
                  "Some with questions that have no easy answers."),
            ("beat", "Those are often the gatherings that matter most."),
            ("p", "It's tempting to believe that difficult conversations are shaped by "
                  "the people participating in them. I think they're equally shaped by "
                  "the environment surrounding them."),
            ("p", "People rarely speak openly when they feel judged. They rarely listen "
                  "deeply when they feel hurried. And they rarely change their minds "
                  "when they don't feel respected."),
            ("p", "That is why thoughtful gathering matters. Not because it removes "
                  "discomfort. But because it creates enough trust for people to remain "
                  "present through it."),
            ("beat", "Sometimes the greatest act of hospitality isn't serving a meal. "
                     "It's creating a space where someone feels safe enough to tell the "
                     "truth."),
            ("p", "I've come to believe that the role of a host is not to control the "
                  "conversation. It is to care for the conditions in which honest "
                  "conversation becomes possible."),
            ("beat", "Because progress rarely begins with agreement. It begins with the "
                     "willingness to remain at the table together."),
        ],
    },
    {
        "slug": "the-future-of-global-collaboration",
        "title": "The Future of Global Collaboration",
        "standfirst": "Every meaningful collaboration begins the same way. With people "
                      "choosing to gather.",
        "body": [
            ("p", "The world's greatest challenges rarely exist within a single "
                  "profession, a single organization, or a single country."),
            ("beat", "Why should we expect the solutions to?"),
            ("p", "For generations, we've become increasingly specialized. We've "
                  "developed extraordinary expertise in individual disciplines."),
            ("p", "But the challenges we face today ask something different of us. They "
                  "ask us to connect those disciplines. To bring together people who "
                  "would not normally share the same room."),
            ("p", "To create places where governments can learn from communities, where "
                  "researchers can learn from lived experience, where business leaders "
                  "can learn from artists, and where every perspective is treated as a "
                  "contribution rather than a competition."),
            ("p", "Collaboration is often described as working together. I think it "
                  "begins much earlier than that. It begins with creating the conditions "
                  "where people are willing to trust one another enough to imagine "
                  "something they could never accomplish alone."),
            ("beat", "That kind of collaboration cannot be rushed. It cannot be "
                     "manufactured. It must be thoughtfully designed."),
            ("p", "Perhaps the future won't be shaped by the organizations with the "
                  "greatest resources. Perhaps it will be shaped by the people who "
                  "become the best at bringing others together with purpose."),
            ("beat", "Because every meaningful collaboration begins the same way. With "
                     "people choosing to gather."),
        ],
    },
    {
        "slug": "beauty-is-the-invitation",
        "title": "Beauty Is the Invitation",
        "standfirst": "Beauty is never the destination. It is where meaningful "
                      "experiences begin.",
        "body": [
            ("p", "There is a common misconception that beauty is the purpose of an "
                  "experience."),
            ("beat", "We believe the opposite. Beauty is the invitation."),
            ("p", "It is the quiet moment that encourages people to pause, become "
                  "present, and open themselves to what is about to unfold. It creates "
                  "anticipation before a word is spoken, comfort before a guest is "
                  "welcomed, and emotion before a memory is made."),
            ("beat", "But beauty alone is never enough."),
            ("p", "The most extraordinary experiences are remembered not simply because "
                  "they were beautiful, but because they created something meaningful. A "
                  "conversation that changed a perspective. A reunion that strengthened "
                  "a family. A celebration that honoured generations. A gathering that "
                  "inspired generosity. A room that made every guest feel they belonged."),
            ("p", "Thoughtful design has the power to influence how people experience "
                  "one another. Every detail matters because every detail contributes to "
                  "the feeling people carry with them long after the gathering has ended."),
            ("beat", "At Sol Vé, beauty is never the destination. It is where "
                     "meaningful experiences begin."),
        ],
    },
    {
        "slug": "the-most-important-thing-we-design",
        "title": "The Most Important Thing We Design Is Not the Décor",
        "standfirst": "Great design is not measured by how impressive a room looks. It "
                      "is measured by how naturally people connect within it.",
        "body": [
            ("p", "When people think about event design, they often think about flowers, "
                  "lighting, tablescapes, colour palettes, or architecture."),
            ("beat", "We think about people."),
            ("p", "Before selecting a single flower or placing a single chair, we ask "
                  "different questions."),
            ("beat", "How should people feel when they arrive? How can this space "
                     "encourage conversation? How can it honour culture, family, or "
                     "tradition? How can it create a sense of belonging?"),
            ("p", "The answers to those questions shape every design decision that "
                  "follows."),
            ("p", "Because great design is not measured by how impressive a room looks. "
                  "It is measured by how naturally people connect within it."),
            ("p", "When design is intentional, beauty becomes more than something people "
                  "admire. It becomes something they experience."),
            ("beat", "That is the difference between decorating a room and designing how "
                     "people gather."),
        ],
    },
    {
        "slug": "why-we-still-gather",
        "title": "Why We Still Gather",
        "standfirst": "Perhaps that is why people have always gathered. Not simply to "
                      "celebrate what already exists, but to create what comes next.",
        "body": [
            ("p", "In a world increasingly connected through technology, gathering in "
                  "person has never been more valuable."),
            ("p", "Some of life's most important moments cannot be experienced through a "
                  "screen."),
            ("beat", "A grandparent embracing a grandchild for the first time. Two "
                     "families becoming one. Friends celebrating decades of shared "
                     "memories. Communities rallying around a cause. Leaders sitting "
                     "together to solve problems that no single organization can solve "
                     "alone."),
            ("p", "Gathering reminds us that relationships are built through presence. "
                  "That ideas grow through conversation. That trust develops over shared "
                  "experiences. That belonging begins when people feel seen, heard, and "
                  "welcomed."),
            ("p", "Every meaningful gathering becomes part of a larger story. It "
                  "influences the memories people carry, the relationships they "
                  "strengthen, and the possibilities they create together."),
            ("beat", "Perhaps that is why people have always gathered. Not simply to "
                     "celebrate what already exists. But to create what comes next."),
        ],
    },
]

# ── Contact ────────────────────────────────────────────────────
CONTACT_OPEN = [
    "Every meaningful gathering begins with a conversation.",
    "Whether you're celebrating a milestone, bringing people together around a shared "
    "purpose, creating an unforgettable experience, or exploring an idea that has yet "
    "to take shape, we'd be honoured to hear your story.",
    "At Sol Vé, we believe the most extraordinary experiences begin by listening. "
    "Before design, before planning, and before the first detail is imagined, we take "
    "the time to understand what matters most to you, the people you're bringing "
    "together, and the purpose your gathering is meant to serve.",
    "No two gatherings are ever the same.",
    "Neither is our approach.",
    "If our philosophy resonates with you, we invite you to begin the conversation.",
    "Together, we'll explore what is possible and thoughtfully create an experience "
    "that reflects your vision, your values, and the story you want to tell.",
]

GET_IN_TOUCH_INTRO = ("Whether you're planning a wedding, designing a signature "
                      "celebration, creating a workshop or curated experience, "
                      "organizing a conference, developing a fundraising initiative, or "
                      "simply exploring an idea, we'd love to connect.")

FOLLOW_ALONG = ("Stay connected as we continue to share stories, perspectives, "
                "behind-the-scenes moments, and the experiences that continue to shape "
                "the way people gather.")

FINAL_THOUGHT = [
    "Thank you for taking the time to learn about Sol Vé.",
    "We never take for granted the trust it takes to invite someone into life's most "
    "meaningful moments.",
    "Should you choose to gather with us, we promise to honour that trust with "
    "thoughtful stewardship, genuine hospitality, and intentional care.",
    "Because the way people gather shapes everything that follows.",
    "We look forward to what we'll create together.",
]

INQUIRY_TYPES = [
    "Wedding", "Signature Moment", "Design and Stylization",
    "Workshop or Curated Experience", "Conference or International Event",
    "Fundraising Campaign", "Something Else",
]

# ── How We Work ────────────────────────────────────────────────
# Not in the PDF. Added because corporate and risk-averse buyers need to see the
# method before they can commit, and the client's feedback was that the site asserts
# rather than demonstrates. Written from the PDF's own language about listening first.
PROCESS = [
    ("We listen",
     "Before design, before planning, before the first detail is imagined, we take the "
     "time to understand what matters most to you, the people you are bringing "
     "together, and the purpose the gathering is meant to serve."),
    ("We propose",
     "You receive a written proposal scoped to your event, your style, and your budget "
     "— concept direction, scope of work, timeline, and cost, in plain terms."),
    ("We design",
     "Concept development, décor, floral design, furnishings, lighting, and visual "
     "storytelling are developed together, so every element serves the same purpose."),
    ("We produce",
     "Vendors, venue, performers, logistics, and run of show are coordinated by the "
     "same people who designed the experience. We do not hand off."),
    ("We steward",
     "On the day, our attention is on the room and the people in it. Afterwards we "
     "review what worked, settle accounts, and hand over the photography."),
]

# ── The MMM campaign ───────────────────────────────────────────
MMM = {
    "title": "Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign 2026",
    "presented": "Proudly presented by Sol Vé Custom Events",
    "theme_title": "2026 Campaign Theme: Silk Roads to Discovery",
    "theme_body": "A celebration of the weaving together of the fabrics of societies: "
                  "those that brought us dance, music, spices, foods and fashion.",
    "body": "The Mystic Moonlight Masquerade Campaign is an immersive charity "
            "masquerade event in Calgary, Alberta, featuring a wide range of "
            "performers, live DJs, visual art installations, and a multi-tier gala "
            "experience, with 100% of net proceeds supporting marginalized communities.",
    "stats": [("$200,000", "Goal"), ("10", "Non-Profits and Charities"),
              ("Multiple", "Events"), ("1", "Movement")],
}
