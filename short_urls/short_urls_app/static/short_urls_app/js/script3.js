// Основные функции
window.onload = function () {
    var dropdown = document.getElementById("template_list").onchange();
};

function copyURI(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText(evt.target.getAttribute('href')).then(() => {
      /* clipboard successfully set */
    }, () => {
      /* clipboard write failed */
    });
}

function populateDropdowns() {
    var dropdown = document.getElementById('template_list');
    if (dropdown.value === 'Site') {
        Site_template_target_url();
        Site_template_utm_source();
        Site_template_utm_medium();
        Site_template_utm_content();
        Site_template_utm_campaign();
        Site_template_utm_term();
    }
    else if (dropdown.value === 'VK') {
        VK_template_target_url();
        VK_template_utm_source();
        VK_template_utm_medium();
        VK_template_utm_content();
        VK_template_utm_campaign();
        VK_template_utm_term();
    }
    else if (dropdown.value === 'Zen') {
        Zen_template_target_url();
        Zen_template_utm_source();
        Zen_template_utm_medium();
        Zen_template_utm_content();
        Zen_template_utm_campaign();
        Zen_template_utm_term();
    }
    else if (dropdown.value === 'CallCenter') {
        CallCenter_template_target_url();
        CallCenter_template_utm_source();
        CallCenter_template_utm_medium();
        CallCenter_template_utm_content();
        CallCenter_template_utm_campaign();
        CallCenter_template_utm_term();
    }
    else if (dropdown.value === 'WebinarAndStream') {
        WebinarAndStream_template_target_url();
        WebinarAndStream_template_utm_source();
        WebinarAndStream_template_utm_medium();
        WebinarAndStream_template_utm_content();
        WebinarAndStream_template_utm_campaign();
        WebinarAndStream_template_utm_term();
    }
    else if (dropdown.value === 'YouTube') {
        YouTube_template_target_url();
        YouTube_template_utm_source();
        YouTube_template_utm_medium();
        YouTube_template_utm_content();
        YouTube_template_utm_campaign();
        YouTube_template_utm_term();
    }
    else if (dropdown.value === 'Donation') {
        Donation_template_target_url();
        Donation_template_utm_source();
        Donation_template_utm_medium();
        Donation_template_utm_content();
        Donation_template_utm_campaign();
        Donation_template_utm_term();
    }
    else if (dropdown.value === 'Instagram') {
        Instagram_template_target_url();
        Instagram_template_utm_source();
        Instagram_template_utm_medium();
        Instagram_template_utm_content();
        Instagram_template_utm_campaign();
        Instagram_template_utm_term();
    }
    else if (dropdown.value === 'Bot') {
        Bot_template_target_url();
        Bot_template_utm_source();
        Bot_template_utm_medium();
        Bot_template_utm_content();
        Bot_template_utm_campaign();
        Bot_template_utm_term();
    }
}

function fillSelect(element_id, data) {
    var dropdown = document.getElementById(element_id);
    // Clear the dropdown list
    dropdown.innerHTML = "";
    // Add options to the dropdown list
    for (var i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        option.value = data[i].value;
        option.text = data[i].text;
        dropdown.appendChild(option);
        //console.log("Added option %o for dropdown %o", option, dropdown);
    }
    //console.log("option[0]=%o", dropdown.options[0]);
    dropdown.options[0].defaultSelected = true;
}

// https://givinschool.org/pto?utm_source=givinschool_org&utm_medium=event_page_GS&utm_content=post_anons
function buildURL() {
    var output = document.getElementById('id_long_url');
    //console.log("output=" + output)
    var url = "";
    var value = document.getElementById('input_template_target_url').value;
    //console.log("value=" + value)
    if (value) {
        if (value.includes("?")) {
            url = value + "&";
        } else {
            url = value + "?";
        }
    }
    //console.log("url=" + url)
    value = document.getElementById('input_template_utm_source').value;
    if (value) {
        url = url + "utm_source=" + value + "&";
    }
    value = document.getElementById('input_template_utm_medium').value;
    if (value) {
        url = url + "utm_medium=" + value + "&";
    }
    value = document.getElementById('input_template_utm_content').value;
    if (value) {
        url = url + "utm_content=" + value + "&";
    }
    value = document.getElementById('input_template_utm_campaign').value;
    if (value) {
        url = url + "utm_campaign=" + value + "&";
    }
    value = document.getElementById('input_template_utm_term').value;
    if (value) {
        url = url + "utm_term=" + value + "&";
    }
    console.log("url=" + url)
    if (url.charAt(url.length - 1) == "&") {
        url = url.substring(0, url.length - 1);
    }
    console.log("url=" + url)
    output.innerHTML = url;
}

/////////////////////////////////////////////////////
//   Функции заполнения шаблонов
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
//   Шаблон <option value="Site">Для сайта</option>
/////////////////////////////////////////////////////
function Site_template_target_url() {
    var data = [{
            "value": "https://givinschool.org/pto",
            "text": "https://givinschool.org/pto"
        }
    ];
    //console.log("dropdown=%o", dropdown);
    fillSelect('template_target_url', data)
}

function Site_template_utm_source() {
    var data = [{
            "value": "givinschool_org",
            "text": "givinschool_org"
        }
    ];
    fillSelect('template_utm_source', data)
}

function Site_template_utm_medium() {
    var data = [{
            "value": "event_page_GS",
            "text": "event_page_GS"
        }
    ];
    fillSelect('template_utm_medium', data)
}

function Site_template_utm_content() {
    var data = [{
            "value": "post_anons",
            "text": "post_anons"
        }
    ];
    fillSelect('template_utm_content', data)
}

function Site_template_utm_campaign() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_campaign', data)
}

function Site_template_utm_term() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_term', data)
}

/////////////////////////////////////////////////////
//    <option value="VK">Для рекламы ВК</option>
/////////////////////////////////////////////////////
function VK_template_target_url() {
    var data = [{
            "value": "https://givinschool.org/pto",
            "text": "https://givinschool.org/pto"
        }
    ];
    //console.log("dropdown=%o", dropdown);
    fillSelect('template_target_url', data)
}

function VK_template_utm_source() {
    var data = [{
            "value": "vk_target",
            "text": "vk_target"
        },
        {
            "value": "vk_market_pl",
            "text": "vk_market_pl"
        },
        {
            "value": "vk",
            "text": "givinschool_org"
        }
    ];
    fillSelect('template_utm_source', data)
}

function VK_template_utm_medium() {
    var data = [{
            "value": "article",
            "text": "article"
        },
        {
            "value": "efir",
            "text": "efir"
        },
        {
            "value": "anons",
            "text": "anons"
        },
        {
            "value": "narrative",
            "text": "narrative"
        },
        {
            "value": "video",
            "text": "video"
        },
        {
            "value": "post",
            "text": "post"
        },
        {
            "value": "vneshnij_sajt",
            "text": "vneshnij_sajt"
        },
        {
            "value": "universalnaya_zapis",
            "text": "universalnaya_zapis"
        },
        {
            "value": "zapis_s_knopkoj",
            "text": "zapis_s_knopkoj"
        },
        {
            "value": "vneshnij_sajt_CA_Mpl",
            "text": "vneshnij_sajt_CA_Mpl"
        },
        {
            "value": "vneshnij_sajt_CA_probuzdenie",
            "text": "vneshnij_sajt_CA_probuzdenie"
        },
        {
            "value": "vneshnij_sajt_CA_meditaciya_joga",
            "text": "vneshnij_sajt_CA_meditaciya_joga"
        },
        {
            "value": "vneshnij_sajt_CA_RF",
            "text": "vneshnij_sajt_CA_RF"
        },
        {
            "value": "universalnaya_zapis_CA_Mpl",
            "text": "universalnaya_zapis_CA_Mpl"
        },
        {
            "value": "universalnaya_zapis_CA_probuzdenie",
            "text": "universalnaya_zapis_CA_probuzdenie"
        },
        {
            "value": "universalnaya_zapis_CA_meditaciya_joga",
            "text": "universalnaya_zapis_CA_meditaciya_joga"
        },
        {
            "value": "universalnaya_zapis_CA_RF",
            "text": "universalnaya_zapis_CA_RF"
        },
        {
            "value": "zapis_s_knopkoj_CA_Mpl",
            "text": "zapis_s_knopkoj_CA_Mpl"
        },
        {
            "value": "zapis_s_knopkoj_CA_probuzdenie",
            "text": "zapis_s_knopkoj_CA_probuzdenie"
        },
        {
            "value": "zapis_s_knopkoj_CA_meditaciya_joga",
            "text": "zapis_s_knopkoj_CA_meditaciya_joga"
        },
        {
            "value": "zapis_s_knopkoj_CA_RF",
            "text": "zapis_s_knopkoj_CA_RF"
        }
    ];
    fillSelect('template_utm_medium', data)
}

function VK_template_utm_content() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_content', data)
}

function VK_template_utm_campaign() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_campaign', data)
}

function VK_template_utm_term() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_term', data)
}

/////////////////////////////////////////////////////
//    <option value="Zen">Для Яндекс.Дзен</option>
/////////////////////////////////////////////////////
function Zen_template_target_url() {
    var data = [{
            "value": "https://givinschool.org/pto",
            "text": "https://givinschool.org/pto"
        }
    ];
    //console.log("dropdown=%o", dropdown);
    fillSelect('template_target_url', data)
}

function Zen_template_utm_source() {
    var data = [{
            "value": "yandex_dzen",
            "text": "yandex_dzen"
        },
        {
            "value": "instagram",
            "text": "instagram"
        },
        {
            "value": "youtube",
            "text": "youtube"
        },
        {
            "value": "chat",
            "text": "chat"
        },
        {
            "value": "email",
            "text": "email"
        },
        {
            "value": "tm",
            "text": "tm"
        },
        {
            "value": "ok",
            "text": "ok"
        },
        {
            "value": "fb",
            "text": "fb"
        }
    ];
    fillSelect('template_utm_source', data)
}

function Zen_template_utm_medium() {
    var data = [{
            "value": "article",
            "text": "article"
        },
        {
            "value": "narrative",
            "text": "narrative"
        },
        {
            "value": "video",
            "text": "video"
        },
        {
            "value": "post",
            "text": "post"
        }
    ];
    fillSelect('template_utm_medium', data)
}

function Zen_template_utm_content() {
    var data = [{
            "value": "НАЗВАНИЕ СТАТЬИ",
            "text": "НАЗВАНИЕ СТАТЬИ"
        }
    ];
    fillSelect('template_utm_content', data)
}

function Zen_template_utm_campaign() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_campaign', data)
}

function Zen_template_utm_term() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_term', data)
}

///////////////////////////////////////////////////////////
//    <option value="CallCenter">Для Колл-центра</option>
///////////////////////////////////////////////////////////
function CallCenter_template_target_url() {
    var data = [{
            "value": "https://givinschool.org/pto",
            "text": "https://givinschool.org/pto"
        }
    ];
    //console.log("dropdown=%o", dropdown);
    fillSelect('template_target_url', data)
}

function CallCenter_template_utm_source() {
    var data = [{
            "value": "call_center",
            "text": "call_center"
        }
    ];
    fillSelect('template_utm_source', data)
}

function CallCenter_template_utm_medium() {
    var data = [{
            "value": "mordanov",
            "text": "mordanov"
        },
        {
            "value": "davidova",
            "text": "davidova"
        },
        {
            "value": "haitova",
            "text": "haitova"
        },
        {
            "value": "homleva",
            "text": "homleva"
        },
        {
            "value": "ayaganov",
            "text": "ayaganov"
        },
        {
            "value": "smirnova",
            "text": "smirnova"
        },
        {
            "value": "goz",
            "text": "goz"
        }
    ];
    fillSelect('template_utm_medium', data)
}

function CallCenter_template_utm_content() {
    var data = [{
            "value": "BAZA",
            "text": "BAZA"
        },
        {
            "value": "REKLAMA",
            "text": "REKLAMA"
        }
    ];
    fillSelect('template_utm_content', data)
}

function CallCenter_template_utm_campaign() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_campaign', data)
}

function CallCenter_template_utm_term() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_term', data)
}

/////////////////////////////////////////////////////////////////////////
//    <option value="WebinarAndStream">Для вебинаров и стримов</option>
/////////////////////////////////////////////////////////////////////////
function WebinarAndStream_template_target_url() {
    var data = [{
            "value": "https://givinschool.org/pto",
            "text": "https://givinschool.org/pto"
        }
    ];
    //console.log("dropdown=%o", dropdown);
    fillSelect('template_target_url', data)
}

function WebinarAndStream_template_utm_source() {
    var data = [{
            "value": "uchebniy_kurs",
            "text": "uchebniy_kurs"
        },
        {
            "value": "online_translaciya",
            "text": "online_translaciya"
        },
        {
            "value": "webinar",
            "text": "webinar"
        }
    ];
    fillSelect('template_utm_source', data)
}

function WebinarAndStream_template_utm_medium() {
    var data = [{
            "value": "shag",
            "text": "shag"
        }
    ];
    fillSelect('template_utm_medium', data)
}

function WebinarAndStream_template_utm_content() {
    var data = [{
            "value": "post_anons",
            "text": "post_anons"
        },
        {
            "value": "post_anons",
            "text": "post_anons"
        },
        {
            "value": "post_anons",
            "text": "post_anons"
        }
    ];
    fillSelect('template_utm_content', data)
}

function WebinarAndStream_template_utm_campaign() {
    var data = [{
            "value": "shag_",
            "text": "shag_"
        }
    ];
    fillSelect('template_utm_campaign', data)
}

function WebinarAndStream_template_utm_term() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_term', data)
}

/////////////////////////////////////////////////////
//    <option value="YouTube">YouTube</option>
/////////////////////////////////////////////////////
function YouTube_template_target_url() {
    var data = [{
            "value": "https://salebot.site/md/2d85f0d0d0e3defda1bc44d57bf6f7c7",
            "text": "https://salebot.site/md/2d85f0d0d0e3defda1bc44d57bf6f7c7"
        },
        {
            "value": "https://test.worldofawakening.com/md/b3cf87cadf0400a2ceb992441bc1bce7",
            "text": "https://test.worldofawakening.com/md/b3cf87cadf0400a2ceb992441bc1bce7"
        },
        {
            "value": "https://salebot.site/md/9a917a8656e122a8a7e4d48298cab789",
            "text": "https://salebot.site/md/9a917a8656e122a8a7e4d48298cab789"
        }
    ];
    //console.log("dropdown=%o", dropdown);
    fillSelect('template_target_url', data)
}

function YouTube_template_utm_source() {
    var data = [{
            "value": "youtube_old",
            "text": "youtube_old"
        },
        {
            "value": "youtube_new",
            "text": "youtube_new"
        }
    ];
    fillSelect('template_utm_source', data)
}

function YouTube_template_utm_medium() {
    var data = [{
            "value": "pod_video",
            "text": "pod_video"
        },
        {
            "value": "pod_article",
            "text": "pod_article"
        }
    ];
    fillSelect('template_utm_medium', data)
}

function YouTube_template_utm_content() {
    var data = [{
            "value": "videoID_",
            "text": "videoID_"
        }
    ];
    fillSelect('template_utm_content', data)
}

function YouTube_template_utm_campaign() {
    var data = [{
            "value": "retrit",
            "text": "retrit"
        }
    ];
    fillSelect('template_utm_campaign', data)
}

function YouTube_template_utm_term() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_term', data)
}

/////////////////////////////////////////////////////
//    <option value="Donation">Донейшен</option>
/////////////////////////////////////////////////////
function Donation_template_target_url() {
    var data = [{
            "value": "https://probuzdenie.org/blagotvoritelnost",
            "text": "https://probuzdenie.org/blagotvoritelnost"
        }
    ];
    //console.log("dropdown=%o", dropdown);
    fillSelect('template_target_url', data)
}

function Donation_template_utm_source() {
    var data = [{
            "value": "ravnovesie",
            "text": "ravnovesie"
        }
    ];
    fillSelect('template_utm_source', data)
}

function Donation_template_utm_medium() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_medium', data)
}

function Donation_template_utm_content() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_content', data)
}

function Donation_template_utm_campaign() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_campaign', data)
}

function Donation_template_utm_term() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_term', data)
}

/////////////////////////////////////////////////////
//    <option value="Instagram">Instagram</option>
/////////////////////////////////////////////////////
function Instagram_template_target_url() {
    var data = [{
            "value": "https://givinschool.org/pto",
            "text": "https://givinschool.org/pto"
        }
    ];
    //console.log("dropdown=%o", dropdown);
    fillSelect('template_target_url', data)
}

function Instagram_template_utm_source() {
    var data = [{
            "value": "instagram",
            "text": "instagram"
        }
    ];
    fillSelect('template_utm_source', data)
}

function Instagram_template_utm_medium() {
    var data = [{
            "value": "taplink",
            "text": "taplink"
        }
    ];
    fillSelect('template_utm_medium', data)
}

function Instagram_template_utm_content() {
    var data = [{
            "value": "post_s_isaykinym",
            "text": "post_s_isaykinym"
        }
    ];
    fillSelect('template_utm_content', data)
}

function Instagram_template_utm_campaign() {
    var data = [{
            "value": "dom_retrit",
            "text": "dom_retrit"
        }
    ];
    fillSelect('template_utm_campaign', data)
}

function Instagram_template_utm_term() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_term', data)
}

/////////////////////////////////////////////////////
//    <option value="Bot">Бот</option>
/////////////////////////////////////////////////////
function Bot_template_target_url() {
    var data = [{
            "value": "https://givinschool.org/pto",
            "text": "https://givinschool.org/pto"
        }
    ];
    //console.log("dropdown=%o", dropdown);
    fillSelect('template_target_url', data)
}

function Bot_template_utm_source() {
    var data = [{
            "value": "bot",
            "text": "bot"
        }
    ];
    fillSelect('template_utm_source', data)
}

function Bot_template_utm_medium() {
    var data = [{
            "value": "tunnel_",
            "text": "tunnel_"
        }
    ];
    fillSelect('template_utm_medium', data)
}

function Bot_template_utm_content() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_content', data)
}

function Bot_template_utm_campaign() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_campaign', data)
}

function Bot_template_utm_term() {
    var data = [{
            "value": "",
            "text": ""
        }
    ];
    fillSelect('template_utm_term', data)
}
