const apiKeyPhoto = "aeYvjbM5OcoeBJ6Pz3k70JlvcCifhD67kmBsFyRtkBGXhxQUTIGDCLE9"
const nameButton = document.getElementById("inputName");
let currentUrl = window.location.href 
var splitUrl = currentUrl.split('?');
console.log(splitUrl[1])
let currentName = splitUrl[1];
let guessedGender = "";
let guessedOrigin = "";
let guessedAge = "";
let correctOrigin = "";
function translateOrigin() {
    let trueOrigin = ""
    /*
    let France = FR
    let	Italy = IT
    let	Spain = ES
    let	Turkey = TR
    let	Germany = DE
    Poland = PL
    GB = "United Kingdom"
    Russia = RU
    CZ = "Czech Republic"
    PT	Portugal	2.103.522
    NL	Netherlands	2.074.912
    BE	Belgium	2.050.461
    MA	Morocco	2.012.516
    PH	Philippines	2.007.670
    US	United States	1.851.436
    RO	Romania	1.472.190
    DZ	Algeria	1.392.027
    NG	Nigeria	1.343.906
    CH	Switzerland	1.269.596
    HU	Hungary	1.191.558
    TH	Thailand	1.056.580
    SE	Sweden	1.040.170
    ID	Indonesia	1.007.824
    IN	India	896.642
    UA	Ukraine	877.446
    MY	Malaysia	838.356
    TN	Tunisia	832.183
    SA	Saudi Arabia	822.149
    GR	Greece	778.361
    CI	Ivory Coast	644.078
    AT	Austria	639.971
    ZA	South Africa	629.291
    KR	South Korea	579.042
    CN	China	536.555
    RS	Serbia	517.549
    JP	Japan	505.620
    EG	Egypt	492.569
    SK	Slovakia	477.856
    SN	Senegal	443.777
    DK	Denmark	395.087
    FI	Finland	370.894
    CM	Cameroon	356.846
    IR	Iran	351.787
    AR	Argentina	349.637
    CA	Canada	341.092
    SG	Singapore	337.002
    PK	Pakistan	314.531
    GH	Ghana	311.567
    LB	Lebanon	292.014
    IE	Ireland	278.676
    AO	Angola	269.970
    NO	Norway	229.829
    BY	Belarus	229.008
    BR	Brazil	226.973
    MX	Mexico	224.250
    CO	Colombia	223.016
    */
    if (guessedOrigin == "KE"){
        guessedOrigin = "Kenya"
        trueOrigin = "Kenya"
    } else {
        console.log("problem")
    }
    
    /*
    CL	Chile	210.959
    KW	Kuwait	204.312
    AL	Albania	198.045
    VE	Venezuela	186.962
    RE	Reunion	186.079
    BA	Bosnia and Herzegovina	184.373
    IL	Israel	182.338
    TW	Taiwan	170.003
    SI	Slovenia	167.862
    KZ	Kazakhstan	161.454
    PE	Peru	159.906
    AZ	Azerbaijan	158.648
    AE	United Arab Emirates	145.847
    CY	Cyprus	135.957
    LT	Lithuania	133.387
    DO	Dominican Republic	126.825
    JO	Jordan	125.155
    MD	Moldova	119.189
    BJ	Benin	113.602
    BG	Bulgaria	113.541
    CD	Democratic Republic of the Congo	110.018
    HR	Croatia	107.145
    LV	Latvia	105.962
    HK	Hong Kong	104.450
    MZ	Mozambique	102.494
    AU	Australia	100.155
    LU	Luxembourg	99.606
    UG	Uganda	99.398
    ML	Mali	97.511
    BF	Burkina Faso	94.841
    MU	Mauritius	90.171
    OM	Oman	85.537
    TG	Togo	84.575
    QA	Qatar	81.133
    MK	Macedonia	79.629
    MG	Madagascar	77.965
    VN	Vietnam	75.247
    GA	Gabon	70.283
    EE	Estonia	66.756
    IQ	Iraq	62.781
    MT	Malta	60.797
    BH	Bahrain	59.786
    TZ	Tanzania	59.013
    EC	Ecuador	57.855
    GE	Georgia	57.462
    AM	Armenia	53.429
    SD	Sudan	52.850
    ET	Ethiopia	49.457
    MM	Myanmar	48.792
    ME	Montenegro	42.209
    SY	Syria	41.018
    UZ	Uzbekistan	40.831
    ZW	Zimbabwe	39.710
    DJ	Djibouti	39.446
    LK	Sri Lanka	37.965
    BD	Bangladesh	37.806
    SH	Saint Helena	35.153
    BW	Botswana	35.023
    CV	Cape Verde	34.570
    BO	Bolivia	33.754
    YE	Yemen	33.419
    RW	Rwanda	33.034
    IS	Iceland	32.729
    LY	Libya	31.258
    NE	Niger	29.998
    AD	Andorra	29.783
    GM	Gambia	26.232
    CG	Republic of the Congo	25.928
    ZM	Zambia	24.979
    AF	Afghanistan	23.531
    NA	Namibia	23.262
    MR	Mauritania	23.219
    UY	Uruguay	22.651
    CR	Costa Rica	22.279
    KG	Kyrgyzstan	21.585
    PA	Panama	19.787
    NP	Nepal	19.191
    GN	Guinea	18.781
    GP	Guadeloupe	16.347
    GQ	Equatorial Guinea	16.259
    MQ	Martinique	15.585
    SC	Seychelles	14.685
    CU	Cuba	14.050
    NZ	New Zealand	13.970
    GT	Guatemala	13.374
    MC	Monaco	13.173
    MV	Maldives	12.261
    MW	Malawi	12.231
    SV	El Salvador	12.058
    GF	French Guiana	11.974
    SL	Sierra Leone	11.777
    LR	Liberia	11.518
    NI	Nicaragua	11.327
    KH	Cambodia	10.401
    TJ	Tajikistan	10.312
    PR	Puerto Rico	10.230
    BI	Burundi	10.053
    PY	Paraguay	9.551
    KM	Comoros	9.111
    LS	Lesotho	7.604
    SO	Somalia	7.336
    HN	Honduras	7.033
    TD	Chad	6.504
    GI	Gibraltar	6.463
    BN	Brunei	6.309
    SM	San Marino	6.150
    JE	Jersey	5.678
    SZ	Swaziland	5.601
    TM	Turkmenistan	5.216
    NC	New Caledonia	4.674
    MN	Mongolia	4.462
    LI	Liechtenstein	4.382
    GL	Greenland	4.353
    BT	Bhutan	4.283
    PF	French Polynesia	4.187
    ST	Sao Tome and Principe	3.375
    YT	Mayotte	3.355
    FO	Faroe Islands	2.993
    JM	Jamaica	2.765
    HT	Haiti	2.449
    BS	Bahamas	2.446
    GW	Guinea-Bissau	2.141
    FJ	Fiji	2.086
    GG	Guernsey	2.085
    LA	Laos	1.952
    TL	East Timor	1.934
    TT	Trinidad and Tobago	1.855
    AG	Antigua and Barbuda	1.723
    EH	Western Sahara	1.708
    CF	Central African Republic	1.667
    PW	Palau	1.604
    IM	Isle of Man	1.374
    AW	Aruba	1.348
    BZ	Belize	1.308
    AS	American Samoa	1.262
    AI	Anguilla	1.081
    MP	Northern Mariana Islands	1.071
    BM	Bermuda	953
    ER	Eritrea	836
    SR	Suriname	819
    VG	British Virgin Islands	788
    VI	U.S. Virgin Islands	756
    GY	Guyana	702
    BB	Barbados	687
    MH	Marshall Islands	678
    MO	Macao	611
    PG	Papua New Guinea	600
    KY	Cayman Islands	545
    KI	Kiribati	507
    AN	Netherlands Antilles	484
    CK	Cook Islands	463
    GU	Guam	442
    WF	Wallis and Futuna	429
    PS	Palestine	371
    TC	Turks and Caicos Islands	359
    VU	Vanuatu	357
    LC	Saint Lucia	344
    TO	Tonga	299
    CC	Cocos Islands	285
    WS	Samoa	274
    GD	Grenada	271
    VA	Vatican	268
    IO	British Indian Ocean Territory	254
    FM	Micronesia	231
    NU	Niue	216
    BL	Saint Barthelemy	202
    KN	Saint Kitts and Nevis	198
    PM	Saint Pierre and Miquelon	195
    FK	Falkland Islands	184
    AQ	Antarctica	171
    PN	Pitcairn	160
    MF	Saint Martin	155
    TV	Tuvalu	154
    VC	Saint Vincent and the Grenadines	153
    DM	Dominica	132
    SB	Solomon Islands	118
    TK	Tokelau	103
    NF	Norfolk Island	93
    CX	Christmas Island	84
    NR	Nauru	62
    SJ	Svalbard and Jan Mayen	40
    MS	Montserrat	25
    KP	North Korea	9
    GS	South Georgia And Sandwich Isl.	5
    BV	Bouvet Island
*/ 
document.getElementById("displayOrigin").textContent = trueOrigin
};



function predict(){

//age part
    fetch('https://api.agify.io?name='+ currentName,{ method:'GET'})
    .then(function(response){return response.json();})
    .then(data => {
        if (currentName != '') {
            guessedAge = data.age;
            document.getElementById("displayAge").textContent = data.age;
            console.log(guessedAge);

        }else{
            console.log("broked age") ; 
        }
        
        
    })
    .catch(err => console.log(err));
//age part
//Origin part
    fetch('https://api.nationalize.io?name='+ currentName,{ method:'GET'})
    .then(function(response){return response.json();})
    .then(data => {
        if (currentName != '') {
            console.log(data)
            tranlateCC()
            guessedOrigin = data.country[0].country_id;
            //document.getElementById("displayOrigin").textContent = data.country[0].country_id;
            //translateOrigin(guessedOrigin) 
            console.log(guessedOrigin);
            let partWay = guessedOrigin.toString()
            
            correctOrigin = partWay.toLowerCase()
            console.log(correctOrigin);
        }else{
            console.log("broked origin") ; 
        }    
    })
    
    .catch(err => console.log(err));




        function tranlateCC(){
    
            fetch("https://restcountries.com/v3.1/alpha/"+ correctOrigin,{ method:'GET'})
            .then(function(response){return response.json();})
            .then(data => {
                if (currentName != '') {
                    console.log(data)
                    //countryName = data.country[0].country_id;
                    //document.getElementById("displayOrigin").textContent = data.country[0].country_id;
                    //translateOrigin(guessedOrigin) 
                    //console.log(countryName);
                }else{
                    console.log("broked age") ; 
                }    
            })
            
        }
//Origin part
//Gender part
    fetch('https://api.genderize.io?name='+ currentName,{ method:'GET'})
    .then(function(response){return response.json();})
    .then(data => {
        if (currentName != '') {
            guessedGender = data.gender;
            document.getElementById("displayGender").textContent = data.gender;
            
            console.log(guessedGender);
        }else{
            console.log("broked gender") ; 
        }
        magicBall()
        
        
    })
    .catch(err => console.log(err));
//Gender part
}
predict()

$("#try-again").on("click", function (event) {
        function change_page_again(){
        window.location.replace("index.html");
        }; 
    change_page_again()
});


function magicBall(){
    const persona = guessedAge +" "+"years old" + " "+ guessedGender +" "+ "from" + " "+ correctOrigin
    console.log(persona)
    const data = fetch(`https://api.pexels.com/v1/search?query=${persona}&total_results=1`,{
        method: "GET",
        headers:{
            Accept:"application/json",
            Authorization: apiKeyPhoto,
        }
    })
    console.log(data)

}
