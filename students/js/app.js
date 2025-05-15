// ছাত্রদের ডেটা
const students = [
    {
        "name": "মাওলানা ইমন মিয়া",
        "roll": "1",
        "registration": "25726001",
        "address": "থানাঃ মির্জাপুর টাঙ্গাইল",
        "image": "images/1.png",
        "mobile": "01774486266"
    },
    {
        "name": "হাঃ মাওঃ মুফতী মাহদী হাসান",
        "roll": "2",
        "registration": "25726002",
        "address": "থানাঃ ঝিকর গাছা যশোর",
        "image": "images/2.png",
        "mobile": "01602453086"
    },
    {
        "name": "হাঃ আবু জাফর জেনারেল ৮ম",
        "roll": "3",
        "registration": "25726003",
        "address": "থানাঃ পাকুন্দিয়া কিশোরগঞ্জ",
        "image": "images/3.png",
        "mobile": "01821882528"
    },
    {
        "name": "মওলানাঃ মুহাম্মদ ওবাইদুল্লাহ দাখিল",
        "roll": "4",
        "registration": "25726004",
        "address": "থানাঃ হাটহাজারী জেলাঃ চট্টগ্রাম",
        "image": "images/4.png",
        "mobile": "01629395971"
    },
    {
        "name": "হাঃ তাহমিদ আব্দুল্লাহ রাশাদ কাফিয়া পর্যন্ত",
        "roll": "5",
        "registration": "25726005",
        "address": "আমীন পুর পাবনা",
        "image": "images/5.png",
        "mobile": "01605289626"
    },
    {
        "name": "হাঃ মোঃ মুজাহিদুল ইসলাম",
        "roll": "6",
        "registration": "25726006",
        "address": "ময়মনসিংহ নান্দাইল",
        "image": "images/6.png",
        "mobile": "01951528153"
    },
    {
        "name": "হাঃ মোঃ যাকারিয়া",
        "roll": "7",
        "registration": "25726007",
        "address": "মাদারীপুর কালকিনি",
        "image": "images/7.png",
        "mobile": "01779869963"
    },
    {
        "name": "মাওঃ মাহমুদুল হাসান",
        "roll": "8",
        "registration": "25726008",
        "address": "নাগর পুর টাঙ্গাইল",
        "image": "images/8.png",
        "mobile": "01748255946"
    },
    {
        "name": "মাওলানা মোঃ মাহাদী হাসান",
        "roll": "9",
        "registration": "25726009",
        "address": "গাজীপুর কালিয়াকৈর",
        "image": "images/9.png",
        "mobile": "01307471780"
    },
    {
        "name": "মোঃ আবুল মন্ডল",
        "roll": "10",
        "registration": "25726010",
        "address": "জামাল পুর ইসলাম পুর",
        "image": "images/10.png",
        "mobile": "01909787720"
    },
    {
        "name": "মাওঃ ক্বারীঃ আবু হানিফ",
        "roll": "11",
        "registration": "25726011",
        "address": "গোপালগঞ্জ +(সদর)",
        "image": "images/11.png",
        "mobile": "01727634049"
    },
    {
        "name": "হাঃ মাওঃ আবু হুরাইরা মিরাজ",
        "roll": "12",
        "registration": "25726012",
        "address": "মাগুরা+(সদর)",
        "image": "images/12.png",
        "mobile": "01904573004"
    },
    {
        "name": "হাঃ ক্বারীঃ শামীম আহমাদ",
        "roll": "13",
        "registration": "25726013",
        "address": "পাবনা+(সদর)",
        "image": "images/13.png",
        "mobile": "01774393121"
    },
    {
        "name": "হাঃ ইয়াহ ইয়া মাহমুদ",
        "roll": "14",
        "registration": "25726014",
        "address": "ক্ষেতলাল+ জয়পুরহাট",
        "image": "images/14.png",
        "mobile": "01973423292"
    },
    {
        "name": "মাওঃ আব্দুল্লাহ আল নোমান",
        "roll": "15",
        "registration": "25726015",
        "address": "ধোবাউড়া+ময়মনসিংহ",
        "image": "images/15.png",
        "mobile": "01642239945"
    },
    {
        "name": "মাওঃ আজিজুল হক",
        "roll": "16",
        "registration": "25726016",
        "address": "চৌহালী +সিরাজগঞ্জ",
        "image": "images/16.png",
        "mobile": "01732419479"
    },
    {
        "name": "মোঃ রেজাউল ঢালী হিঘয়াতুন্নাহু",
        "roll": "17",
        "registration": "25726017",
        "address": "শিববর+মাদারীপুর",
        "image": "images/17.png",
        "mobile": "01855444863"
    },
    {
        "name": "মাওঃ আঃ আলিম",
        "roll": "18",
        "registration": "25726018",
        "address": "জামালপুর +(সদর)",
        "image": "images/18.png",
        "mobile": "01731643692"
    },
    {
        "name": "হাঃ মাওঃ ক্বারীঃ আবির হাসান",
        "roll": "19",
        "registration": "25726019",
        "address": "পাবনা+(সদর)",
        "image": "images/19.png",
        "mobile": "01772743591"
    },
    {
        "name": "মাওঃ ক্বারীঃ মাহমুদুল হাসান নাঈম",
        "roll": "20",
        "registration": "25726020",
        "address": "শ্রীপুর+গাজীপুর",
        "image": "images/20.png",
        "mobile": "01843681924"
    },
    {
        "name": "মাওলামা মুহঃজাহিদ হাসান",
        "roll": "21",
        "registration": "25726021",
        "address": "থানাঃসাপাহার জেলাঃনওগা",
        "image": "images/21.png",
        "mobile": "01768170936"
    },
    {
        "name": "মাওঃ মুহ্বাঃ উমর ফারুক",
        "roll": "22",
        "registration": "25726022",
        "address": "থানাঃভূরুঙ্গামারী জেলাঃকুড়িগ্রাম",
        "image": "images/22.png",
        "mobile": "01785344689"
    },
    {
        "name": "হাফেজ মুহ্বঃ ইছাক",
        "roll": "23",
        "registration": "25726023",
        "address": "থানাঃগরিপুর জেলাঃময়মনসিংহ",
        "image": "images/23.png",
        "mobile": "01868810075"
    },
    {
        "name": "হাঃ কারিঃ মুহ্বাঃ রহমাতুল্লাহ",
        "roll": "24",
        "registration": "25726024",
        "address": "থানাঃবন্দর জেলাঃনারায়নঞ্জ",
        "image": "images/24.png",
        "mobile": "01833628485"
    },
    {
        "name": "হাঃ মাওঃ মুহ্বাঃ হামীম শেখ",
        "roll": "25",
        "registration": "25726025",
        "address": "থানাঃমোল্লাহাট জেলাঃবাগেরহাট",
        "image": "images/25.png",
        "mobile": "01905377543"
    },
    {
        "name": "হাঃ মাওঃ মুহ্বাঃ আল -আমীন",
        "roll": "26",
        "registration": "25726026",
        "address": "থানাঃবড়াইগ্রাম জেলা নাটোর",
        "image": "images/26.png",
        "mobile": "01750469679"
    },
    {
        "name": "মাওঃ মুহাঃ মনির হোসেন",
        "roll": "27",
        "registration": "25726027",
        "address": "থানাঃভাংগুড়া জেলাঃপাবনা",
        "image": "images/27.png",
        "mobile": "01724775814"
    },
    {
        "name": "মাওঃ মুহাঃ মেরাজুল ইসলাম",
        "roll": "28",
        "registration": "25726028",
        "address": "থানা সিরাজগঞ্জ  জেলাঃ সিরাজগঞ্জ",
        "image": "images/28.png",
        "mobile": "01821182042"
    },
    {
        "name": "হাঃ মুহাঃ তরিকুল ইসলাম",
        "roll": "29",
        "registration": "25726029",
        "address": "থানাঃ কাজীপুর জেলাঃ সিরাজগঞ্জ",
        "image": "images/29.png",
        "mobile": "01837009793"
    },
    {
        "name": "মাওঃ মুহ্বাঃ আবু সাম্মার",
        "roll": "30",
        "registration": "25726030",
        "address": "থানাঃ সিরাজগঞ্জ জেলাঃ সিরাজগঞ্জ",
        "image": "images/30.png",
        "mobile": "01885873310"
    },
    {
        "name": "মাওঃ মোঃ আব্দুল্লাহ জিহাদ",
        "roll": "31",
        "registration": "25726031",
        "address": "থানাঃ গবিন্দগঞ্জ জেলাঃগাইবান্ধা",
        "image": "images/31.png",
        "mobile": "01789082431"
    },
    {
        "name": "মাওঃ মোঃ জুবায়ের হুসেন",
        "roll": "32",
        "registration": "25726032",
        "address": "থানাঃ সাটুরিয়া জেলাঃমানিকগঞ্জ",
        "image": "images/32.png",
        "mobile": "01784636322"
    },
    {
        "name": "মাওঃ মুহাসোলম আলি",
        "roll": "33",
        "registration": "25726033",
        "address": "থানাঃফুলবাড়িয়া জেলাঃময়মনসিংহ",
        "image": "images/33.png",
        "mobile": "01730369714"
    },
    {
        "name": "হাঃ মাওঃ মোঃ শামীম মিয়া",
        "roll": "34",
        "registration": "25726034",
        "address": "থানাঃফুলবাড়িয়া জেলাঃময়মনসিংহ",
        "image": "images/34.png",
        "mobile": "01744820925"
    },
    {
        "name": "মাওঃ মোঃ আশিকুর রহমান",
        "roll": "35",
        "registration": "25726035",
        "address": "থানাঃসোলথা জেলাঃফরিদপুর",
        "image": "images/35.png",
        "mobile": "01730160124"
    },
    {
        "name": "হাঃ মোঃ ইমরান খান",
        "roll": "36",
        "registration": "25726036",
        "address": "থানাঃঘিওর সাটুরিয়া জেলাঃমানিকগঞ্জ",
        "image": "images/36.png",
        "mobile": "01337090409"
    },
    {
        "name": "হাঃ মাওঃ মোঃ আব্দুল মুমিন",
        "roll": "37",
        "registration": "25726037",
        "address": "থানাঃশেরপুর সদর জেলাঃ শেরপুর সদর",
        "image": "images/37.png",
        "mobile": "01825825354"
    },
    {
        "name": "হাঃ মাওঃ মোঃ শরীফ মাহমুদ",
        "roll": "38",
        "registration": "25726038",
        "address": "থানাঃমুকসুদ পুর জেলাঃ গোপালগঞ্জ",
        "image": "images/38.png",
        "mobile": "01737233856"
    },
    {
        "name": "মাওঃ মোঃ আব্দুর রহমান",
        "roll": "39",
        "registration": "25726039",
        "address": "থানাঃবেলকুচি জেলাঃ সিরাজগঞ্জ",
        "image": "images/39.png",
        "mobile": "01887655329"
    },
    {
        "name": "হাঃ মোঃ নাঈম মিয়া",
        "roll": "40",
        "registration": "25726040",
        "address": "থানাঃঈশোরগঞ্জ জেলাঃ ময়মনসিংহ",
        "image": "images/40.png",
        "mobile": "01852988252"
    },
    {
        "name": "খাইরুল ইসলাম হাঃ মাওলানা",
        "roll": "41",
        "registration": "25726041",
        "address": "থানাঃমুক্তাগাছা জেলাঃ ময়মনসিং",
        "image": "images/41.png",
        "mobile": "01621267518"
    },
    {
        "name": "সারা উদ্দিন শেখ মাওলানা",
        "roll": "42",
        "registration": "25726042",
        "address": "থানাঃভূয়াপুর জেলাঃ টাঙ্গাইল",
        "image": "images/42.png",
        "mobile": "01304031381"
    },
    {
        "name": "নাজমুল ইসলাম  আফেন্দি মাওলানা",
        "roll": "43",
        "registration": "25726043",
        "address": "থানাঃমধুপুর জেলাঃ টাঙ্গাইল",
        "image": "images/43.png",
        "mobile": "01881671552"
    },
    {
        "name": "নুরুল ইসলাম মাওলানা, মুফতি",
        "roll": "44",
        "registration": "25726044",
        "address": "থানাঃমধুপুর জেলাঃ টাঙ্গাইল",
        "image": "images/44.png",
        "mobile": "01832360844"
    },
    {
        "name": "এনায়েতুল্লাহ রাজন মাওলানা",
        "roll": "45",
        "registration": "25726045",
        "address": "থানাঃভেড়ামারা জেলাঃ কুষ্টিয়া",
        "image": "images/45.png",
        "mobile": "01324362695"
    },
    {
        "name": "তালহা হাঃ মাওলানা,মুফতি",
        "roll": "46",
        "registration": "25726046",
        "address": "থানাঃ সিরাজগঞ্জ সদর  জেলাঃ সিরাজগঞ্জ",
        "image": "images/46.png",
        "mobile": "01759192349"
    },
    {
        "name": "মোঃ শেখ আজিম উদ্দিন হাফেজ",
        "roll": "47",
        "registration": "25726047",
        "address": "থানাঃ কিশোরগঞ্জ সদর  জেলাঃ কিশোরগঞ্জ",
        "image": "images/47.png",
        "mobile": "01603531133"
    },
    {
        "name": "মোঃ আনিছ মোল্লা হাফেজ",
        "roll": "48",
        "registration": "25726048",
        "address": "থানাঃআমিনপুর জেলাঃপাবনা",
        "image": "images/48.png",
        "mobile": "01804637005"
    },
    {
        "name": "আব্দুর রহিম মাওলানা",
        "roll": "49",
        "registration": "25726049",
        "address": "থানাঃশাহজাদপুর জেলাঃ সিরাজগঞ্জ",
        "image": "images/49.png",
        "mobile": "01789323114"
    },
    {
        "name": "মোঃ ইবরাহিম খলিল মাওলানা,মুফতি",
        "roll": "50",
        "registration": "25726050",
        "address": "থানাঃখোকসা জেলাঃ কুষ্টিয়া",
        "image": "images/50.png",
        "mobile": "01736256827"
    }
];

// ছাত্রদের তালিকা দেখানোর ফাংশন
function renderStudents(filter = '') {
    const list = document.getElementById('studentList');
    if (list) {
        list.innerHTML = '';
        students
            .filter(s =>
                s.name.toLowerCase().includes(filter.toLowerCase()) ||
                s.roll.includes(filter) ||
                s.registration.includes(filter) ||
                s.mobile.includes(filter)
            )
            .forEach(student => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${student.image}" alt="Student" style="width:100px; height:100px; object-fit:cover; border-radius:50%;">
                    <h3>${student.name}</h3>
                    <p>রোল: ${student.roll}</p>
                `;
                card.onclick = () => {
                    localStorage.setItem('student', JSON.stringify(student));
                    window.location.href = 'details.html';
                };
                list.appendChild(card);
            });
    }
}

// ছাত্রের ডিটেইলস দেখানোর ফাংশন
function renderStudentDetails() {
    const student = JSON.parse(localStorage.getItem('student'));
    const container = document.getElementById('studentDetails');
    if (student && container) {
        container.innerHTML = `
            <img src="${student.image}" alt="Student">
            <h2>${student.name}</h2>
            <p><span>রোল:</span> ${student.roll}</p>
            <p><span>রেজিস্ট্রেশন:</span> ${student.registration}</p>
            <p><span>ঠিকানা:</span> ${student.address}</p>
            <p><span></span> <a href="tel:${student.mobile}" class="call-button" target="_blank">মোবাইল : ${student.mobile}</a></p>

        `;
    }
}

// সার্চ ইনপুট হ্যান্ডেলিং
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', e => {
            renderStudents(e.target.value);
        });
    }

    // কোন পেজে আছি দেখে function কল
    if (document.getElementById('studentList')) {
        renderStudents();
    } else if (document.getElementById('studentDetails')) {
        renderStudentDetails();
    }
});
