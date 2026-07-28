// Miami County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-28
//
// Every URL below was fetched and confirmed to resolve on the review date.
//
// TWO NOTABLE GAPS, both deliberate:
//
//   * THE CITY OF TROY AND THE CITY OF PIQUA ARE MISSING. Both sites are real,
//     but neither could be verified: their hosts time out when robots.txt is
//     requested, so every fetch attempt failed. The county's own directory
//     page lists phone numbers and no URLs, so there is no authoritative
//     source to copy from either. Troy is (937) 335-2224 and Piqua is
//     (937) 778-2065. Confirm troyohio.gov and piquaoh.gov in a browser and
//     add them — do not paste an unverified guess for the county seat.
//
//   * Casstown, Laura, Ludlow Falls and Potsdam have no official websites at
//     all; searches surface only Facebook pages and directories.
//
// Huber Heights and Union are on the county's own municipality list because
// their corporate limits extend into Miami County, but both are seated in
// Montgomery County and are left out here. Bradford straddles the Miami/Darke
// line and IS included — its village hall is on the Miami side.
//
// Beware the lookalike: "miamicountyauditors.org" is an unaffiliated SEO site,
// not the Auditor. The official host is www.miamicountyohioauditor.gov.

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Miami County Auditor Property Search";

export const LINKS = [
  // ---------- Government ----------
  { name: "Miami County, Ohio", category: "Government", subcategory: "County", url: "https://www.miamicountyohio.gov/", description: "Official Miami County government portal, covering government, courts, services and business sections." },
  { name: "Miami County Auditor", category: "Government", subcategory: "Auditor", url: "https://www.miamicountyohioauditor.gov/", description: "Property search, tax estimator and conveyance-fee tools from the Auditor's office at 201 West Main Street in Troy." },
  { name: "Miami County Auditor Map Viewer", category: "Government", subcategory: "GIS", url: "https://www.miamicountyohioauditor.gov/Map", description: "The Auditor's interactive parcel map, an embedded ArcGIS Experience application." },
  { name: "Miami County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/miami/", description: "County elections board at 215 West Main Street in Troy." },
  { name: "Miami County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://www.miamicountyohio.gov/sheriff/", description: "Sheriff's office at 201 West Main Street in Troy, covering the jail, concealed-carry permits and offender registration." },
  { name: "Miami County Common Pleas Court", category: "Government", subcategory: "Courts", url: "https://www.miamicountyohio.gov/common-pleas/", description: "General Division court on the third floor of the Safety Building, 201 W. Main St. in Troy." },
  { name: "Miami County Municipal Court", category: "Government", subcategory: "Courts", url: "https://www.miamicountyohio.gov/municipal-court/", description: "Municipal court at 215 W. Main St. in Troy, handling traffic, criminal, civil and small-claims cases." },
  { name: "Miami County Engineer", category: "Government", subcategory: "County", url: "https://www.miamicountyohio.gov/engineer/", description: "County roads and bridges at 2100 N. County Rd. 25A in Troy, with a Map Department in the Safety Building." },
  { name: "Miami County Tax Maps", category: "Government", subcategory: "Mapping", url: "https://www.miamicountyohio.gov/698/Tax-Maps", description: "The Engineer's archive of downloadable tax map, survey plat and record plat PDFs by geographic area." },
  { name: "Miami County Transit", category: "Government", subcategory: "Transit", url: "https://www.miamicountyohio.gov/transit/", description: "Countywide demand-response bus service based at 2036 N. County Road 25-A in Troy." },
  { name: "Cities, Villages & Townships Directory", category: "Government", subcategory: "Municipalities", url: "https://www.miamicountyohio.gov/cities-villages-townships/", description: "County-maintained contact list for all fourteen municipalities and twelve townships in Miami County." },
  { name: "City of Tipp City", category: "Government", subcategory: "City", url: "https://www.tippcityohio.gov/", description: "Municipal site for Tipp City, covering tax filing, utility payments and zoning permits." },
  { name: "Village of Covington", category: "Government", subcategory: "Village", url: "https://www.villageofcovington.com/", description: "Village government at 1 South High Street, which also houses the police department." },
  { name: "Village of West Milton", category: "Government", subcategory: "Village", url: "https://www.westmiltonohio.gov/", description: "Official village site for West Milton in southwestern Miami County." },
  { name: "Village of Bradford", category: "Government", subcategory: "Village", url: "https://bradfordoh.com/", description: "Village hall at 115 North Miami Avenue, in a village straddling the Miami and Darke county line." },
  { name: "Village of Pleasant Hill", category: "Government", subcategory: "Village", url: "https://www.pleasanthillohio.com/", description: "Village government at 200 Walnut St., covering utility payments, permits, minutes and ordinances." },
  { name: "Village of Fletcher", category: "Government", subcategory: "Village", url: "https://fletcherohio.us/", description: "Official site for the village of Fletcher, whose council meets at 611 South Walnut Street." },
  { name: "Miami Valley Regional Planning Commission", category: "Government", subcategory: "Regional Planning", url: "https://www.mvrpc.org/", description: "Regional planning agency established in 1964, serving Miami and six neighbouring counties from Dayton." },
  // ---------- Education ----------
  { name: "Troy-Miami County Public Library", category: "Education", subcategory: "Library", url: "https://www.tmcpl.org/", description: "County library at 419 W. Main Street in Troy, with a local-history centre, maker lab and a Pleasant Hill branch." },
  { name: "Piqua Public Library", category: "Education", subcategory: "Library", url: "https://www.piqualibrary.org/", description: "Municipal public library at 116 W. High Street in Piqua." },
  { name: "Milton-Union Public Library", category: "Education", subcategory: "Library", url: "https://www.mupubliclibrary.org/", description: "Public library at 560 S. Main Street in West Milton." },
  { name: "Tipp City Public Library", category: "Education", subcategory: "Library", url: "https://www.tippcitylibrary.org/", description: "Public library at 11 E. Main Street in Tipp City." },
  { name: "J.R. Clarke Public Library", category: "Education", subcategory: "Library", url: "https://www.jrclarkelibrary.org/", description: "Covington library at 102 East Spring Street, organised in 1917 as the Covington-Newberry school and public library." },
  { name: "Bradford Public Library", category: "Education", subcategory: "Library", url: "https://www.bradfordpubliclibrary.org/", description: "Independent public library at 138 E. Main Street in Bradford." },
  { name: "Troy City Schools", category: "Education", subcategory: "K-12", url: "https://www.troy.k12.oh.us/", description: "Miami County's largest district, home of the Trojans, with offices at 500 N. Market St. in Troy." },
  { name: "Piqua City Schools", category: "Education", subcategory: "K-12", url: "https://www.piqua.org/", description: "Piqua City School District with central offices at 215 Looney Rd." },
  { name: "Tipp City Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://www.tippcityschools.com/", description: "Home of the Red Devils, with district offices at 90 S. Tippecanoe Dr." },
  { name: "Milton-Union Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://www.milton-union.k12.oh.us/", description: "Home of the Bulldogs, with a central office at 7610 Milton-Potsdam Road in West Milton." },
  { name: "Bethel Local Schools", category: "Education", subcategory: "K-12", url: "https://www.bethel.k12.oh.us/", description: "Bethel Township district at 7045 US 40, home of the Bees." },
  { name: "Bradford Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://www.bradford.k12.oh.us/", description: "Bradford district whose teams compete as the Railroaders." },
  { name: "Covington Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://www.covington.k12.oh.us/", description: "K-12 district at 807 Chestnut Street in Covington, home of the Buccaneers." },
  { name: "Miami East Local Schools", category: "Education", subcategory: "K-12", url: "https://www.miamieast.k12.oh.us/", description: "District at 3825 North State Route 589 in Casstown, home of the Vikings." },
  { name: "Newton Local Schools", category: "Education", subcategory: "K-12", url: "https://www.newton.k12.oh.us/", description: "Newton Township district serving Pleasant Hill and the county's northwest." },
  { name: "Upper Valley Career Center", category: "Education", subcategory: "Career-Tech", url: "https://www.uppervalleycc.org/", description: "Career-technical school at 8811 Career Drive in Piqua, founded in 1975 and renamed in 2011." },
  { name: "Edison State Community College", category: "Education", subcategory: "Higher Ed", url: "https://www.edisonohio.edu/", description: "Community college with its main campus at 1973 Edison Drive in Piqua, plus Greenville, Eaton and Troy sites." },
  // ---------- Health ----------
  { name: "Miami County Public Health", category: "Health", subcategory: "Public Health", url: "https://www.miamicountyhealth.net/", description: "County health district providing immunisations, WIC, screenings and environmental health inspections." },
  { name: "Upper Valley Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.premierhealth.com/locations/upper-valley-medical-center", description: "Premier Health hospital at 3130 N. County Road 25A in Troy, with a 24-hour Level III trauma centre." },
  { name: "Kettering Health Troy Emergency Center", category: "Health", subcategory: "Emergency", url: "https://ketteringhealth.org/locations/kettering-health-troy-emergency-center-er008/", description: "Stroke-ready emergency centre at 600 West Main Street in Troy, open around the clock." },
  { name: "Health Partners Free Clinic", category: "Health", subcategory: "Free Clinic", url: "https://healthpartnersclinic.org/", description: "Free clinic at 1300 N. County Rd 25-A in Troy, serving uninsured and under-insured county residents." },
  { name: "Tri-County Board of Recovery & Mental Health Services", category: "Health", subcategory: "Behavioral Health", url: "https://www.tcbmds.org/", description: "ADAMHS board at 1280 N. County Road 25A in Troy, funding services across Darke, Miami and Shelby counties." },
  // ---------- Business & Economy ----------
  { name: "Troy Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.troyohiochamber.com/", description: "Chamber at 510 W. Water Street in Troy, representing over 550 member businesses." },
  { name: "Piqua Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.piquaareachamber.com/", description: "Chamber of commerce at 326 N. Main Street in Piqua." },
  { name: "Tipp City Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.tippcitychamber.org/", description: "Chamber founded in 1954 at 12 South 3rd Street, serving Tipp City and Monroe and Bethel townships." },
  { name: "Miami County Economic Development", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.miamicountyohio.gov/economic-development/", description: "County development division at 1506 One Stop Court, Suite 6, in Troy." },
  { name: "Miami County Momentum", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.miamicountymomentum.com/", description: "County economic development brand targeting food production, logistics, automotive, building products and aerospace." },
  { name: "Dayton Development Coalition", category: "Business & Economy", subcategory: "Regional", url: "https://www.daytonregion.com/", description: "Regional economic development partnership covering the fourteen counties around Dayton." },
  // ---------- Community & Social ----------
  { name: "Miami County Job & Family Services", category: "Community & Social", subcategory: "Social Services", url: "https://www.miamicountyohio.gov/job-family-services/", description: "Agency at 2040 N. County Road 25A in Troy, administering SNAP, Medicaid, child care and child support." },
  { name: "OhioMeansJobs Miami County", category: "Community & Social", subcategory: "Workforce", url: "https://www.miamicountyohio.gov/job-seeker/", description: "Job-seeker centre at 2040 N. County Road 25A, with open interviews on Tuesdays and free resume and training help." },
  { name: "Miami County Historical & Genealogical Society", category: "Community & Social", subcategory: "History", url: "https://www.mchgs.org/", description: "Ohio Genealogical Society chapter since 1987, based in Piqua." },
  { name: "Area Agency on Aging, PSA 2", category: "Community & Social", subcategory: "Seniors", url: "https://www.info4seniors.org/", description: "Regional aging agency at 40 W. Second Street in Dayton, serving Miami and eight other counties." },
  // ---------- Recreation & Tourism ----------
  { name: "Miami County Park District", category: "Recreation & Tourism", subcategory: "Parks", url: "https://miamicountyparks.com/", description: "Park district at 2645 E. St. Rt. 41 in Troy, managing fifteen parks and reserves." },
  { name: "Charleston Falls Preserve", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://www.miamicountyparks.com/parks/charleston", description: "216-acre preserve at 2535 Ross Road in Tipp City, with a 37-foot waterfall over the same rock strata as Niagara." },
  { name: "Miami County Visitors & Convention Bureau", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.homegrowngreat.com/", description: "County tourism bureau at 405 SW Public Square in Troy, promoting the region as “Home Grown Great.”" },
  { name: "Miami County Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "https://www.miamicountyohiofair.com/", description: "The Miami County Agricultural Society, which runs the county fair each August." },
  { name: "Hobart Arena", category: "Recreation & Tourism", subcategory: "Venue", url: "https://www.hobartarena.com/", description: "City of Troy arena at 255 Adams Street, hosting concerts, expos, ice skating and banquets for over fifty years." },
  // ---------- News & Media ----------
  { name: "Miami Valley Today", category: "News & Media", subcategory: "Newspaper", url: "https://www.miamivalleytoday.com/", description: "Daily newspaper covering news, sports and events across Miami County and the wider valley." },
  { name: "Troy Daily News", category: "News & Media", subcategory: "Newspaper", url: "https://www.tdn-net.com/", description: "Local news covering Troy, Tipp City, Casstown and the surrounding communities." },
  { name: "Piqua Daily Call", category: "News & Media", subcategory: "Newspaper", url: "https://www.dailycall.com/news/", description: "Newspaper covering Piqua, Troy, Bradford and Covington news, sports and school board coverage." },
  { name: "WPTW 98.1 FM", category: "News & Media", subcategory: "Radio", url: "https://www.981wptw.com/", description: "Classic hits station at 1625 Covington Ave in Piqua, operated by Muzzy Broadcasting." },
];
