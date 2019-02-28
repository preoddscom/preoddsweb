export default {
  en: {
    "win.header": "Winning Percentage",
    "profit.header": "Profit Percentage",
    "probability.header": "Probability Percentage",
    "win.percentage":
      "Winning percentage is calculated by using the number of wins and losses.{br}{br}Let's clarify how we are calculating the winning percentage;{br}{br}Home to Win odds:'2.75'{br}{br}Assume that the bookie gave home win '2.75' for 22 times.{br}{br}Won  : 5{br}{br}Lost : 17{br}{br}Winning Percentage % : (5/22) * 100 = %22.7{br}{br}So we can assume that the winning percentage for home win '2.75' is %22.7{br}{br}In others words, '2.75' home win was succesfull around %22.7",

    "profit.loose":
      "For the profit percentage, we can also use the term valuebet.{br}{br}Profit percentage gives the percentage of ((total won money - total bet money) / total matches ) * 100{br}{br}Let's clarify how we are calculating the profit percentage;{br}{br}Home to Win odds : '2.75'{br}{br}Assume that the bookie gave home win '2.75' for 22 times.{br}{br}Won  : 5{br}{br}Lost : 17{br}{br}If we had played 1 unit bet for each match, we would have spent 22 units.{br}{br}If 5 of the bets were won , we would have won '2.75' * 5 = 13.75{br}{br}Total Spent   : 22 units{br}{br}Won Money : 13.75 units{br}{br}Our total profit is 13.75 - 22 = -8.25 units{br}{br}Profit Percentage(ValueBet) : ( (13.75 - 22) / 22 ) * 100 = %-37.5{br}{br}",
    probability:
      "Probability Percentage gives the winning probability of each odd in its own group.{br}{br}Assume that the following odds are given by the bookie;{br}{br}Home Win(HW)  : 2.0{br}{br} Draw    (DR)  : 3.0{br}{br}Away Win(AW)  : 2.7{br}{br}Profit for the bet group  : (1/HW) + (1/DR) + (1/AW){br}{br}When profit for the bet group decreases, the profitability of the bookie also decreases.{br}{br}Revenue to Distribute : 1 / Profit for the bet group{br}{br}Revenue Percentage to Distribute : 1 / Revenue to Distribute{br}{br}Now let's calculate the percentiles;{br}{br}HW : 1 / (Revenue Percentage to Distribute * HW){br}{br}DR : 1 / (Revenue Percentage to Distribute * DR){br}{br}AW : 1 / (Revenue Percentage to Distribute * AW){br}{br}Profit for the bet group : (1 / 2.0) + (1 / 3.0) + (1 / 2.7) = 0.5 + 0.33 + 0.37 = 1.20{br}{br}Revenue to Distribute    : 1 / 1.20 = 0.83{br}{br}Revenue Percentage to Distribute : 0.83 * 100 = %83{br}{br}We can say that, the bookie is expecting to pay %83 of the total revenues for the match.{br}{br}(bookie is expecting a profit for the bet group : 100 - 83 = %17){br}{br}HW: (1/2.0) * 0.83 = 0.415 * 100 = %41.5{br}{br}DR: (1/3.0) * 0.83 = 0.276 * 100 = %27.6{br}{br}AW: (1/2.7) * 0.83 = 0.307 * 100 = %30.7{br}{br}Finally we have calculated the winning percentage of each odd in its own group.",
    loading: "Loading...",
    privacy: "Privacy Term",
    follow: "Follow Us",
    alert: "Caution +18",
    "quick.links": "Quick Links",
    "info.header": "Information",
    caution: "It is not suitable for children under 18 to enter the website.",
    info:
      "All the digital data, match codes, iddaa rates, iddaa program, match results, standings, statistics and forecast information provided by Preodds.com is for informational purposes only. Efforts are made to ensure the accuracy and timeliness of the information, but it is the users' own responsibility to check the accuracy of the information. Preodds.com shall not be held liable for any material or moral damages that may occur.",

    /** NAVBAR */
    "navbar.home": "Home",
    "navbar.leagues": "Leagues",
    "navbar.oddsAnalysis": "Odds/Analysis",
    "navbar.hotOdds": "Hot Rates",
    "navbar.winningOdds": "Winning Percentage",
    "navbar.profitOdds": "Profit Percentage",
    "navbar.contact": "Contact",
    "navbar.qa": "Q&A",
    "navbar.live": "Live Scores",
    "navbar.setting": "Settings",
    "navbar.goalSound": " Sound",
    "navbar.favoriteHeader": "Popular Leagues",

    /** COUPON */
    "coupon.coupon": "Tip",

    /** LIVE */
    "live.live": "Live Matches",
    "live.all": "All Matches",
    "live.nomatches": "No Live Matches",

    /**All Leagues Menu */
    "leagueMenu.country": "Countries",
    "leagueMenu.page": "Page",

    /** Top */
    "top.goal": "Goal",
    "top.assist": "Assist",
    "top.card": "Card",
    "top.stats": "Statistic",

    /** Fixture */
    "fixture.current": "Current Fixture",
    "fixture.previous": "Previous Fixture",

    /** Standing */

    "standing.standing": "Standing",
    "standing.overall": "Overall",
    "standing.home": "Home",
    "standing.away": "Away",
    "standing.team": "Team",
    "standing.played": "MP",
    "standing.win": "W",
    "standing.draw": "D",
    "standing.lost": "L",
    "standing.goal": "G",
    "standing.points": "P",
    "standing.average": "Av",
    "standing.gf": "GF",
    "standing.ga": "GA",

    /** Events */
    "detail.event": "Events",
    "detail.corner": "Corner",
    "detail.matchinfo": "Match Info",
    "detail.weather": "Weather Info",
    "detail.match": "Match",
    "detail.detail": "Detail",
    "detail.analysis": "Analysis",
    "detail.standing": "Standing",
    "detail.lineup": "Lineup",
    "detail.lineupheader": "#11 Formation : ",
    "detail.lineupsub": " Substitutes ",

    "position.goalkeeper": " Goalkeeper ",
    "position.defansive": " Defansive ",
    "position.midfielder": " Midfielder ",
    "position.Santrafor": " Santrafor ",
    "detail.statsanalysis": "Stats Analysis",

    "detail.FT": "FT",
    "detail.HT": "HT",
    "detail.CANC": "Cancel",
    "detail.POSTP": "Postp",
    "detail.AWARD": "Award",
    "detail.ET": "Et",
    "detail.PEN_LIVE": "Pen Live",
    "detail.PEN": "Pen",

    "detail.formWin": "W",
    "detail.formLost": "L",
    "detail.formDraw": "D",

    "detail.nomatches": "No Matches Found",

    /**Match Detail */
    "match.round": "Round",
    "match.country": "Country",
    "match.season": "Season",
    "match.league": "League",
    "match.venue": "Venue",
    "match.pitch": "Pitch",
    "match.attendance": "Attendance",
    "match.referee": "Referee",
    "match.date": "Date",
    "match.time": "Time",
    "match.tv": "Tv",
    /**Weather Detail */
    "weather.weather": "Weather Info",
    "weather.heat": "Heat",
    "weather.cloud": "Cloud",
    "weather.humidity": "Humidity",
    "weather.wind": "Wind",
    "weather.windspeed": "Wind Speed",

    /**Statistic detail */

    "statistic.statistic": "Statistic",
    "statistic.possession": "Ball Possesion",
    "statistic.last10Avg": " Last 10 Mathces Average",
    msgoal: "Full Time Goals",
    htgoal: "Half Time Goals",
    "msgoal.forward": "Forward",
    "msgoal.against": "Against",
    "msgoal.total": "Total",
    "htgoal.forward": "Forward",
    "htgoal.against": "Against",
    "htgoal.total": "Total",

    shot: "Shot",
    "shot.shotsTotal": "Totatl",
    "shot.shotsOnGoal": "On Goal",
    "shot.shotsOffGoal": "Off Goal",
    "shot.shotsBlocked": "Blocked",
    "shot.shotsInsideBox": "Inside Box",
    "shot.shotsOutsideBox": "Outside Box",
    "shot.saves": "Saves",
    "shot.goalKick": "Goal Kick",

    passes: "Passes",
    "passes.passesPercentage": "Percentage",
    "passes.passesTotal": "Total",
    "passes.passesAccurate": "Accurate",
    "passes.ballSafe": "Ball Safe",
    "passes.attacks": "Attacks",

    discipline: "Discipline",
    "discipline.substitutions": "substitutions",
    "discipline.yellowCards": "Yellow Cards",
    "discipline.redCards": "Red Cards",
    "discipline.offsides": "Offside",
    "discipline.fouls": "Foul",

    freekick: "Freekick",
    "freekick.freekick": "Freekick",
    "freekick.corner": "Corner",
    "freekick.touch": "Touch",

    "oddSelectOptionDefault.label": "Full Time",
    "oddSearch.date": "Date",
    "oddSearch.fixState": "Match State",
    "oddSearch.fixStateNotStart": "Not Started",
    "oddSearch.fixStateAll": "All",
    "oddSearch.winPercentage": "Wining %",
    "oddSearch.oddsType": "Odds Type",
    "oddSearch.earningPercentage": "Earning %",
    "oddSearch.analysisPeriod": "Analysis Period",
    "oddSearch.minOdds": "Minimum Rate",
    "oddSearch.filter": "Filter",
    "oddSearch.oneMonth": "1 Month",
    "oddSearch.threeMonth": "3 Months",
    "oddSearch.sixMonth": "6 Months",
    "oddSearch.oneYear": "1 Year",
    "oddSearch.all": "All",
    "oddSearch.dateTodayButton": "Today",

    "odds.menuDetail": "Rates Filter",
    "odds.menuHeaderHot": "Hot Rates Filter",
    "odds.menuHeaderWin": "Winning Percentage Filter",
    "odds.menuHeaderProfit": "Profit Percentage Filter",

    "oddItem.oddType": "Type",
    "oddItem.odd": "Rate",
    "oddItem.oddWin": "Win #",
    "oddItem.oddLost": "Lost #",
    "oddItem.oddWin%": "Win %",
    "oddItem.oddProfit%": "Profit %",
    "oddItem.oddProb%": "Prob %",
    "oddItem.noData": "No Odds found by selected search criteria",
    "oddItem.loadMore": "Load More",

    "live.start": "Start",
    "live.favorite": "Favorites"
  },

  tr: {
    "win.header": "Kazanma Yüzdesi",
    "profit.header": "Kar-Zarar Yüzdesi",
    "probability.header": " Olasılık Yüzdesi",
    "win.percentage":
      "Kazanma Yüzdesi hesaplanma mantığı; Oranın kazanma ve kaybetme sayılarını kullanarak yapılan hesaplama ile oranın %(yüzdelik) olarak kazanma performansını bize vermektedir.{br}{br}Bu hesaplamayı bir örnek ile açıklayalım;{br}{br}Maç sonucu 1 için 2.75 oranını ele alalım. MS1 - 2,75 oranı şu ana kadar 22 defa verilmiş olsun 5 defa kazanmış ve 17 defa kaybettiğini düşünelim.{br}{br}Kazanan maç sayısı: 5{br}{br}Kaybeden maç sayısı: 17{br}{br}Kazanma % : (5 / 22) * 100 = %22.73{br}{br}Kazanma Yüzdesi hesaplaması ile ilgili oranın kazanma şansı: %22.73 olarak çıkmaktadır.",
    "profit.loose":
      "Kar-Zarar Yüzdesi hesaplanma mantığı;Oranın kazanma sayısı, kaybetme sayısı ve oranın kendisi kullanılarak yapılan hesaplama ile oranın %(yüzdelik) olarak Kar-Zarar performansını bize vermektedir.{br}{br}Kar-Zarar Yüzdesi hesapkamasını bir örnek ile açıklayalım;{br}{br}Maç sonucu 1 için 2.75 oranını ele alalım. MS1 - 2,75 oranı şu ana kadar 22 defa iddaa tarafından verilmiş olsun 5 defa kazanmış ve 17 defa kaybettiğini düşünelim.{br}{br}Kazanan maç sayısı: 5{br}{br}Kaybeden maç sayısı: 17{br}{br}Toplam Bahis Tutarı: 1 x 22 = 22 TL{br}{br}Kazandığımız Tutar: 2.75 x 5 = 13,75 TL{br}{br}Toplam Bakiye : 13,75 - 22 = - 8,25 TL{br}{br}VBET: ((13,75 – 22) / 22) * 100 = % - 37.5{br}{br}İlgili oranın Kar-Zarar hesaplaması sonucunda 8,25 TL kaybetmiş oldu. Bu hesaba göre Kar-Zarar yüzdesi % - 37.5 olarak görünmektedir.",
    probability:
      "Oranın kendi bahis grubu içerisindeki kazanma şansını vermektedir.{br}{br}Bu hesaplamayı bir örnekle anlatmak gerekirse.{br}{br}Maç sonucu bahis grubunu ele alalım. Maç Sonu bahis grubunda MS1 (Maç Sonu 1), MS0 (Maç Sonu 0) ve MS2 (Maç Sonu 2) olarak 3 farklı bahis türü bulunmaktadır.{br}{br}MS1: 2.00 MS0: 3.00 MS2: 2.70 olarak ele alalım.{br}{br}KAR hesaplaması : (1/M1) + (1/M0) + (1/M2) toplamı KAR payını vermektedir. Bu oran ne kadar düşük olursa iddaa’nın kar oranı da o kadar düşük olur. Bu oranın düşük olduğu maçlara oynamak aslında bahisçiler için daha fazla kazanma şansı getirdiği de söylenmektedir.{br}{br}KAR PAYI: (1/M1) + (1/M0) + (1/M2){br}{br}yukarıdaki hesaplamaya göre 1 TL için dağıtılacak toplam tutar ise;{br}{br}DAĞITILACAK TUTAR: 1/ KAR PAYI{br}{br}DAĞITILACAK TUTAR ORANI: 100 * DAĞITILACAK TUTAR{br}{br}Şimdide oranların yüzdelik dilimlerini hesaplayalım.{br}{br}M1: 1 / (DAĞITILACAK TUTAR ORANI * M1){br}{br}M0: 1 / (DAĞITILACAK TUTAR ORANI * M0){br}{br}M2: 1 / (DAĞITILACAK TUTAR ORANI * M2){br}{br}    Şimdi bu hesaplamamızı yukarıdaki oranlarla hesaplayalım.{br}{br}KAR PAYI: (1/2.00) + (1/3.00) + (1/2.70) = 0,50 + 0,33 + 0,37 = 1,20{br}{br}DAĞITILACAK TUTAR: 1/1.20 = 0,83{br}{br}DAĞITILACAK TUTAR ORANI: 0,83 * 100 = 83{br}{br}(yani 1 TL için 0,83 TL para dağıtılması beklenmektedir. Bu oran grubunda karı payı  0,17 TL dir.){br}{br}M1: (1 / 2.00) * 0,83 = 0,415 * 100 = % 41,5{br}{br}    M0: (1 / 3.00) * 0,83 = 0,276 * 100 = % 27,6{br}{br}M2: (1 / 2.70) * 0,83 = 0,307 * 100 = % 30,7{br}{br} Hesaplamalar sonucunda her bir oranın Kazanma Olasılık Yüzdesini bulmuş olduk..{br}{br}",
    privacy: "Gizlilik Politikası",
    follow: "Bizi Takip Edin",
    "quick.links": "Hızlı Erişim",
    "info.header": "Bilgilendirme",
    alert: "+18 Uyarı",
    caution: "Web sitesine 18 yaşından küçüklerin girmesi uygun değildir.",
    info:
      "Preodds.com'da yer alan tüm sayısal veriler, iddaa maç kodları, iddaa oranları, iddaa programı, maç sonuçları, puan durumu, istatistik ve tahmin bilgileri sadece bilgilendirme amaçlıdır. Bilgilerin doğruluğunu ve güncelliğini sağlamak için gereken gayret gösterilmektedir ancak bilgilerin doğruluğunun kontrolü kullanıcıların kendi sorumluluğundadır. Oluşabilecek hatalardan, maddi/manevi zararlardan Preodds.com sorumlu tutulamaz.",

    /** NAVBAR */
    "navbar.home": "Anasayfa",
    "navbar.leagues": "Ligler",
    "navbar.oddsAnalysis": "Oran/Analiz",
    "navbar.hotOdds": "Sıcak Oranlar",
    "navbar.winningOdds": "Kazanma Yüzdesi",
    "navbar.profitOdds": "Kar/Zarar Yüzdesi",
    "navbar.contact": "İletişim",
    "navbar.qa": "SSS",
    "navbar.live": "Canlı Sonuçlar",
    "navbar.setting": "Ayarlar",
    "navbar.goalSound": " Ses",
    "navbar.favoriteHeader": "Favori Ligler",

    /** COUPON */
    "coupon.coupon": "Tip",

    /** LIVE */
    "live.live": "Canlı Maçlar",
    "live.all": "Tüm Maçlar",
    "live.nomatches": "Canlı maç yok.",

    /**All Leagues Menu */
    "leagueMenu.country": "Ülke",
    "leagueMenu.page": "Sayfa",

    /** Top */
    "top.goal": "Gol",
    "top.assist": "Asist",
    "top.card": "Kart",
    "top.stats": "İstatistik",

    /** Fixture */
    "fixture.current": "Bu Hafta",
    "fixture.previous": "Önceki Hafta",

    /** Standing */

    "standing.standing": "Puan",
    "standing.overall": "Genel",
    "standing.home": "İçerde",
    "standing.away": "Deplasman",
    "standing.team": "Takım",
    "standing.played": "O",
    "standing.win": "G",
    "standing.draw": "B",
    "standing.lost": "M",
    "standing.goal": "G",
    "standing.points": "P",
    "standing.average": "Av",
    "standing.gf": "AG",
    "standing.ga": "YG",

    /** Events */
    "detail.event": "Akış",
    "detail.corner": "Korner",
    "detail.matchinfo": "Maç Bilgisi",
    "detail.weather": "Hava Durumu",
    "detail.match": "Maç",
    "detail.detail": "Detay",
    "detail.analysis": "Analiz",
    "detail.standing": "Puan",
    "detail.lineup": "Kadro",
    "detail.lineupheader": "#11 Formasyon : ",
    "detail.lineupsub": " Yedekler ",

    "position.goalkeeper": " Kaleci ",
    "position.defansive": " Defans ",
    "position.midfielder": " Orta saha ",
    "position.santrafor": " Forvet ",

    "detail.statsanalysis": "İstatistik Analiz",

    "detail.FT": "MS",
    "detail.HT": "İY",
    "detail.CANC": "İptal",
    "detail.POSTP": "ERT",
    "detail.AWARD": "Hükmen",
    "detail.ET": "UZ",
    "detail.PEN_LIVE": "Pen At.",
    "detail.PEN": "Pen",

    "detail.formWin": "G",
    "detail.formLost": "M",
    "detail.formDraw": "B",

    "detail.nomatches": "Maç bilgisi bulunamadı.",

    /**Match Detail */
    "match.round": "Hafta",
    "match.country": "Ülke",
    "match.season": "Sezon",
    "match.league": "Lig",
    "match.venue": "Stat",
    "match.pitch": "Zemin",
    "match.attendance": "Seyirci",
    "match.referee": "Hakem",
    "match.date": "Tarih",
    "match.time": "Saat",
    "match.tv": "Tv Yayını",
    /**Weather Detail */
    "weather.weather": "Hava Durumu",
    "weather.heat": "Hava Sıcaklığı",
    "weather.cloud": "Bulut olasılığı",
    "weather.humidity": "Nem Oranı",
    "weather.wind": "Rüzgar Derecesi",
    "weather.windspeed": "Rüzgar Hızı",

    /**Statistic detail */

    "statistic.statistic": "İstatistik",
    "statistic.possession": "Topla Oynama",
    "statistic.last10Avg": " Son 10 Maç Ortalama",
    msgoal: "Maç Sonucu Gol",
    htgoal: "İlk Yarı Gol",
    "msgoal.forward": "Attığı",
    "msgoal.against": "Yediği",
    "msgoal.total": "Toplam",
    "htgoal.forward": "Attığı",
    "htgoal.against": "Yediği",
    "htgoal.total": "Toplam",

    shot: "Şut",
    "shot.shotsTotal": "Toplam",
    "shot.shotsOnGoal": "Kaleyi Bulan",
    "shot.shotsOffGoal": "Kaleyi Bulmayan",
    "shot.shotsBlocked": "Engellenen",
    "shot.shotsInsideBox": "Ceza Sahası",
    "shot.shotsOutsideBox": "Ceza Sahası Dışı",
    "shot.saves": "Kaleci Kurtarış",
    "shot.goalKick": "Gol Vuruşu",

    passes: "Pas",
    "passes.passesPercentage": "Başarılı Pas",
    "passes.passesTotal": "Toplam",
    "passes.passesAccurate": "İsabetli",
    "passes.ballSafe": "Top Çalma",
    "passes.attacks": "Atak",

    discipline: "Disiplin",
    "discipline.substitutions": "Oyuncu Değişimi",
    "discipline.yellowCards": "Sarı Kart",
    "discipline.redCards": "Kırmızı Kart",
    "discipline.offsides": "Ofsayt",
    "discipline.fouls": "Faul",

    freekick: "Duran Top",
    "freekick.freekick": "Serbet Vuruş",
    "freekick.corner": "Korner",
    "freekick.touch": "Taç",

    "oddSelectOptionDefault.label": "Maç Sonucu",

    "oddSearch.date": "Tarih",
    "oddSearch.fixState": "Maç Durumu",
    "oddSearch.fixStateNotStart": "Başlamamış",
    "oddSearch.fixStateAll": "Hepsi",
    "oddSearch.winPercentage": "Kazanma %",
    "oddSearch.oddsType": "Oran Tipi",
    "oddSearch.earningPercentage": "Kar Kaz %",
    "oddSearch.analysisPeriod": "Analiz Aralığı",
    "oddSearch.minOdds": "Minimum Oran",
    "oddSearch.filter": "Filtrele",
    "oddSearch.oneMonth": "1 Ay",
    "oddSearch.threeMonth": "3 Ay",
    "oddSearch.sixMonth": "6 Ay",
    "oddSearch.oneYear": "1 Yıl",
    "oddSearch.all": "Hepsi",
    "oddSearch.dateTodayButton": "Bugün",

    "oddItem.oddType": "Tip",
    "oddItem.odd": "Oran",
    "oddItem.oddWin": "Kaz #",
    "oddItem.oddLost": "Kay #",
    "oddItem.oddWin%": "Kaz %",
    "oddItem.oddProfit%": "Kar Zar %",
    "oddItem.oddProb%": "Ola. %",
    "oddItem.noData": "Arama kriterine göre oran analizi bulunamadı!",
    "oddItem.loadMore": "Daha Fazla Yükle",

    "odds.menuDetail": "Oran Filtre",
    "odds.menuHeaderHot": "Sıcak Oranlar Filtre",
    "odds.menuHeaderWin": "Kazanma Yüzdesi Filtre",
    "odds.menuHeaderProfit": "Kar/Zarar Yüzdesi Filtre",

    "live.start": "Başladı",
    "live.favorite": "Favoriler",

    loading: "Yükleniyor..."
  }
};
