import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Clock from "../assets/images/icons/clock.svg";
import dropdownIcon from "../assets/images/icons/dropdown-icon.svg";
import Select from "react-select";
import Flag from "react-world-flags";
import flag from "../assets/images/icons/usa-icon.svg"



export default function Settings() {
  const [time, setTime] = useState("4:17 AM (GMT-6)");
  const countryOptions = [
    { value: "AF", label: "Afghanistan", initials: "AFG" },
    { value: "AL", label: "Albania", initials: "ALB" },
    { value: "DZ", label: "Algeria", initials: "ALG" },
    { value: "AS", label: "American Samoa", initials: "ASM" },
    { value: "AD", label: "Andorra", initials: "AND" },
    { value: "AO", label: "Angola", initials: "ANG" },
    { value: "AI", label: "Anguilla", initials: "AIA" },
    { value: "AQ", label: "Antarctica", initials: "ATA" },
    { value: "AG", label: "Antigua and Barbuda", initials: "ATG" },
    { value: "AR", label: "Argentina", initials: "ARG" },
    { value: "AM", label: "Armenia", initials: "ARM" },
    { value: "AW", label: "Aruba", initials: "ABW" },
    { value: "AU", label: "Australia", initials: "AUS" },
    { value: "AT", label: "Austria", initials: "AUT" },
    { value: "AZ", label: "Azerbaijan", initials: "AZE" },
    { value: "BS", label: "Bahamas", initials: "BAH" },
    { value: "BH", label: "Bahrain", initials: "BHR" },
    { value: "BD", label: "Bangladesh", initials: "BAN" },
    { value: "BB", label: "Barbados", initials: "BRB" },
    { value: "BY", label: "Belarus", initials: "BLR" },
    { value: "BE", label: "Belgium", initials: "BEL" },
    { value: "BZ", label: "Belize", initials: "BLZ" },
    { value: "BJ", label: "Benin", initials: "BEN" },
    { value: "BM", label: "Bermuda", initials: "BMU" },
    { value: "BT", label: "Bhutan", initials: "BHU" },
    { value: "BO", label: "Bolivia", initials: "BOL" },
    { value: "BA", label: "Bosnia and Herzegovina", initials: "BIH" },
    { value: "BW", label: "Botswana", initials: "BWA" },
    { value: "BR", label: "Brazil", initials: "BRA" },
    { value: "BN", label: "Brunei", initials: "BRN" },
    { value: "BG", label: "Bulgaria", initials: "BUL" },
    { value: "BF", label: "Burkina Faso", initials: "BFA" },
    { value: "BI", label: "Burundi", initials: "BDI" },
    { value: "KH", label: "Cambodia", initials: "KHM" },
    { value: "CM", label: "Cameroon", initials: "CMR" },
    { value: "CA", label: "Canada", initials: "CAN" },
    { value: "CV", label: "Cape Verde", initials: "CPV" },
    { value: "KY", label: "Cayman Islands", initials: "CYM" },
    { value: "CF", label: "Central African Republic", initials: "CAF" },
    { value: "TD", label: "Chad", initials: "CHA" },
    { value: "CL", label: "Chile", initials: "CHI" },
    { value: "CN", label: "China", initials: "CHN" },
    { value: "CO", label: "Colombia", initials: "COL" },
    { value: "KM", label: "Comoros", initials: "COM" },
    { value: "CG", label: "Congo", initials: "CGO" },
    { value: "CR", label: "Costa Rica", initials: "CRC" },
    { value: "CI", label: "Côte d'Ivoire", initials: "CIV" },
    { value: "HR", label: "Croatia", initials: "CRO" },
    { value: "CU", label: "Cuba", initials: "CUB" },
    { value: "CY", label: "Cyprus", initials: "CYP" },
    { value: "CZ", label: "Czech Republic", initials: "CZE" },
    { value: "DK", label: "Denmark", initials: "DEN" },
    { value: "DJ", label: "Djibouti", initials: "DJI" },
    { value: "DM", label: "Dominica", initials: "DMA" },
    { value: "DO", label: "Dominican Republic", initials: "DOM" },
    { value: "EC", label: "Ecuador", initials: "ECU" },
    { value: "EG", label: "Egypt", initials: "EGY" },
    { value: "SV", label: "El Salvador", initials: "SLV" },
    { value: "GQ", label: "Equatorial Guinea", initials: "EQG" },
    { value: "ER", label: "Eritrea", initials: "ERI" },
    { value: "EE", label: "Estonia", initials: "EST" },
    { value: "ET", label: "Ethiopia", initials: "ETH" },
    { value: "FJ", label: "Fiji", initials: "FIJ" },
    { value: "FI", label: "Finland", initials: "FIN" },
    { value: "FR", label: "France", initials: "FRA" },
    { value: "GA", label: "Gabon", initials: "GAB" },
    { value: "GM", label: "Gambia", initials: "GAM" },
    { value: "GE", label: "Georgia", initials: "GEO" },
    { value: "DE", label: "Germany", initials: "GER" },
    { value: "GH", label: "Ghana", initials: "GHA" },
    { value: "GR", label: "Greece", initials: "GRE" },
    { value: "GD", label: "Grenada", initials: "GRN" },
    { value: "GU", label: "Guam", initials: "GUM" },
    { value: "GT", label: "Guatemala", initials: "GUA" },
    { value: "GN", label: "Guinea", initials: "GUI" },
    { value: "GW", label: "Guinea-Bissau", initials: "GBS" },
    { value: "GY", label: "Guyana", initials: "GUY" },
    { value: "HT", label: "Haiti", initials: "HAI" },
    { value: "HN", label: "Honduras", initials: "HON" },
    { value: "HK", label: "Hong Kong", initials: "HKG" },
    { value: "HU", label: "Hungary", initials: "HUN" },
    { value: "IS", label: "Iceland", initials: "ISL" },
    { value: "IN", label: "India", initials: "IND" },
    { value: "ID", label: "Indonesia", initials: "IDN" },
    { value: "IR", label: "Iran", initials: "IRN" },
    { value: "IQ", label: "Iraq", initials: "IRQ" },
    { value: "IE", label: "Ireland", initials: "IRL" },
    { value: "IL", label: "Israel", initials: "ISR" },
    { value: "IT", label: "Italy", initials: "ITA" },
    { value: "JM", label: "Jamaica", initials: "JAM" },
    { value: "JP", label: "Japan", initials: "JPN" },
    { value: "JO", label: "Jordan", initials: "JOR" },
    { value: "KZ", label: "Kazakhstan", initials: "KAZ" },
    { value: "KE", label: "Kenya", initials: "KEN" },
    { value: "KI", label: "Kiribati", initials: "KIR" },
    { value: "KP", label: "North Korea", initials: "PRK" },
    { value: "KR", label: "South Korea", initials: "KOR" },
    { value: "KW", label: "Kuwait", initials: "KUW" },
    { value: "KG", label: "Kyrgyzstan", initials: "KGZ" },
    { value: "LA", label: "Laos", initials: "LAO" },
    { value: "LV", label: "Latvia", initials: "LAT" },
    { value: "LB", label: "Lebanon", initials: "LEB" },
    { value: "LS", label: "Lesotho", initials: "LES" },
    { value: "LR", label: "Liberia", initials: "LBR" },
    { value: "LY", label: "Libya", initials: "LBY" },
    { value: "LI", label: "Liechtenstein", initials: "LIE" },
    { value: "LT", label: "Lithuania", initials: "LTU" },
    { value: "LU", label: "Luxembourg", initials: "LUX" },
    { value: "MO", label: "Macau", initials: "MAC" },
    { value: "MK", label: "North Macedonia", initials: "MKD" },
    { value: "MG", label: "Madagascar", initials: "MAD" },
    { value: "MW", label: "Malawi", initials: "MAW" },
    { value: "MY", label: "Malaysia", initials: "MAS" },
    { value: "MV", label: "Maldives", initials: "MDV" },
    { value: "ML", label: "Mali", initials: "MLI" },
    { value: "MT", label: "Malta", initials: "MLT" },
    { value: "MH", label: "Marshall Islands", initials: "MHL" },
    { value: "MR", label: "Mauritania", initials: "MTN" },
    { value: "MU", label: "Mauritius", initials: "MRT" },
    { value: "MX", label: "Mexico", initials: "MEX" },
    { value: "FM", label: "Micronesia", initials: "FSM" },
    { value: "MD", label: "Moldova", initials: "MDA" },
    { value: "MC", label: "Monaco", initials: "MON" },
    { value: "MN", label: "Mongolia", initials: "MGL" },
    { value: "ME", label: "Montenegro", initials: "MNE" },
    { value: "MA", label: "Morocco", initials: "MAR" },
    { value: "MZ", label: "Mozambique", initials: "MOZ" },
    { value: "MM", label: "Myanmar", initials: "MYA" },
    { value: "NA", label: "Namibia", initials: "NAM" },
    { value: "NR", label: "Nauru", initials: "NAU" },
    { value: "NP", label: "Nepal", initials: "NEP" },
    { value: "NL", label: "Netherlands", initials: "NED" },
    { value: "NZ", label: "New Zealand", initials: "NZL" },
    { value: "NI", label: "Nicaragua", initials: "NCA" },
    { value: "NE", label: "Niger", initials: "NIG" },
    { value: "NG", label: "Nigeria", initials: "NGA" },
    { value: "NO", label: "Norway", initials: "NOR" },
    { value: "OM", label: "Oman", initials: "OMA" },
    { value: "PK", label: "Pakistan", initials: "PAK" },
    { value: "PW", label: "Palau", initials: "PLW" },
    { value: "PS", label: "Palestine", initials: "PSE" },
    { value: "PA", label: "Panama", initials: "PAN" },
    { value: "PG", label: "Papua New Guinea", initials: "PNG" },
    { value: "PY", label: "Paraguay", initials: "PAR" },
    { value: "PE", label: "Peru", initials: "PER" },
    { value: "PH", label: "Philippines", initials: "PHI" },
    { value: "PL", label: "Poland", initials: "POL" },
    { value: "PT", label: "Portugal", initials: "POR" },
    { value: "QA", label: "Qatar", initials: "QAT" },
    { value: "RO", label: "Romania", initials: "ROU" },
    { value: "RU", label: "Russia", initials: "RUS" },
    { value: "RW", label: "Rwanda", initials: "RWA" },
    { value: "KN", label: "Saint Kitts and Nevis", initials: "SKN" },
    { value: "LC", label: "Saint Lucia", initials: "LCA" },
    { value: "VC", label: "Saint Vincent and the Grenadines", initials: "SVG" },
    { value: "WS", label: "Samoa", initials: "SAM" },
    { value: "SM", label: "San Marino", initials: "SMR" },
    { value: "ST", label: "Sao Tome and Principe", initials: "STP" },
    { value: "SA", label: "Saudi Arabia", initials: "KSA" },
    { value: "SN", label: "Senegal", initials: "SEN" },
    { value: "RS", label: "Serbia", initials: "SRB" },
    { value: "SC", label: "Seychelles", initials: "SEY" },
    { value: "SL", label: "Sierra Leone", initials: "SLE" },
    { value: "SG", label: "Singapore", initials: "SIN" },
    { value: "SK", label: "Slovakia", initials: "SVK" },
    { value: "SI", label: "Slovenia", initials: "SLO" },
    { value: "SB", label: "Solomon Islands", initials: "SOL" },
    { value: "SO", label: "Somalia", initials: "SOM" },
    { value: "ZA", label: "South Africa", initials: "RSA" },
    { value: "SS", label: "South Sudan", initials: "SSD" },
    { value: "ES", label: "Spain", initials: "ESP" },
    { value: "LK", label: "Sri Lanka", initials: "SRI" },
    { value: "SD", label: "Sudan", initials: "SUD" },
    { value: "SR", label: "Suriname", initials: "SUR" },
    { value: "SE", label: "Sweden", initials: "SWE" },
    { value: "CH", label: "Switzerland", initials: "SUI" },
    { value: "SY", label: "Syria", initials: "SYR" },
    { value: "TW", label: "Taiwan", initials: "TWN" },
    { value: "TJ", label: "Tajikistan", initials: "TJK" },
    { value: "TZ", label: "Tanzania", initials: "TAN" },
    { value: "TH", label: "Thailand", initials: "THA" },
    { value: "TL", label: "Timor-Leste", initials: "TLS" },
    { value: "TG", label: "Togo", initials: "TOG" },
    { value: "TO", label: "Tonga", initials: "TGA" },
    { value: "TT", label: "Trinidad and Tobago", initials: "TTO" },
    { value: "TN", label: "Tunisia", initials: "TUN" },
    { value: "TR", label: "Turkey", initials: "TUR" },
    { value: "TM", label: "Turkmenistan", initials: "TKM" },
    { value: "TV", label: "Tuvalu", initials: "TUV" },
    { value: "UG", label: "Uganda", initials: "UGA" },
    { value: "UA", label: "Ukraine", initials: "UKR" },
    { value: "AE", label: "United Arab Emirates", initials: "UAE" },
    { value: "GB", label: "United Kingdom", initials: "UK" },
    { value: "US", label: "United States", initials: "USA" },
    { value: "UY", label: "Uruguay", initials: "URU" },
    { value: "UZ", label: "Uzbekistan", initials: "UZB" },
    { value: "VU", label: "Vanuatu", initials: "VAN" },
    { value: "VE", label: "Venezuela", initials: "VEN" },
    { value: "VN", label: "Vietnam", initials: "VIE" },
    { value: "EH", label: "Western Sahara", initials: "SAH" },
    { value: "YE", label: "Yemen", initials: "YEM" },
    { value: "ZM", label: "Zambia", initials: "ZAM" },
    { value: "ZW", label: "Zimbabwe", initials: "ZIM" },
  ];

  const formatOptionLabel = ({ value, label, initials }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Flag
        code={value}
        style={{ marginRight: 10, width: 20, height: 20, borderRadius: "50%" }}
      />
      <span>{initials}</span>
    </div>
  );

  
  return (
    <div className="settings-page-wrapper">
      <Sidebar />
      <div className="container-fluid">
        <div className="page-content">
          <div className="page-title">
            <h1>Settings Information</h1>
          </div>
          <div className="information-cards-wrapper">
            <div className="single-information-card">
              <div className="row">
                <div className="col-4">
                  <div className="info-title">
                    <h3>Organization information</h3>
                  </div>
                </div>
                <div className="col-8">
                  <div className="info-section-wrapper">
                    <div className="single-info">
                      <p>Organization Name</p>
                      <input type="text" placeholder="ABC Ilmiya" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-information-card">
              <div className="row">
                <div className="col-4">
                  <div className="info-title">
                    <h3>Tenant Information</h3>
                  </div>
                </div>
                <div className="col-8">
                  <div className="info-section-wrapper">
                    <div className="single-info">
                      <p>Tenant ID</p>
                      <input type="number" placeholder="E54CC4R6" />
                    </div>
                    <div className="single-info">
                      <p>Tenant Domain</p>
                      <input type="text" placeholder="bahaji.myilmiya.com" />
                    </div>
                    <div className="single-info">
                      <p>Tenant Region</p>
                      <div className="region">
                            <Flag code="US" style={{height:"15px",width:"15px",borderRadius:"50%"}}/>
                            <span >United States</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-information-card">
              <div className="row">
                <div className="col-4">
                  <div className="info-title">
                    <h3>Organization Address</h3>
                  </div>
                </div>
                <div className="col-8">
                  <div className="info-section-wrapper">
                    <div className="single-info">
                      <p>Address</p>
                      <input type="text" placeholder="169 Hayhurst" />
                    </div>
                    <div className="single-info">
                      <p>Secondary</p>
                      <input type="text" placeholder="LaneWest" />
                    </div>
                    <div className="single-info">
                      <p>City</p>
                      <input type="text" placeholder="Bloomfield" />
                    </div>
                    <div className="single-info">
                      <p>Postal Code</p>
                      <input type="number" placeholder="54926" />
                    </div>
                    <div className="single-info">
                      <p>Country</p>
                      <Select
                        options={countryOptions}
                        formatOptionLabel={formatOptionLabel}
                        placeholder="Select your country"
                        className="flags-field"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-information-card">
              <div className="row">
                <div className="col-4">
                  <div className="info-title">
                    <h3>Default Time Zone</h3>
                  </div>
                </div>
                <div className="col-8">
                  <div className="info-section-wrapper">
                    <div className="single-info">
                      <p>Time zone</p>
                      <div className="time-picker">
                        <div className="time-icon">
                          <img src={Clock} alt="icon" />
                        </div>
                        <select
                          name=""
                          id=""
                          className="time-input"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                        >
                          <option value={time}>{time}</option>
                          <option value="">1</option>
                          <option value="">1</option>
                          <option value="">1</option>
                        </select>
                        {/* <input
                          type="text"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="time-input"
                          
                        /> */}
                        <div className="time-dropdown">
                          {/* <span className="arrow-down">
                            <img src={dropdownIcon} alt="icon" />
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
