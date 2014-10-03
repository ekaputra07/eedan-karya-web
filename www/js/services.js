angular.module('eedankarya.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Events', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var events = [
    {
      id: 1, 
      rahina: 'Soma Umanis Bala',
      tanggal: '25 Agustus 2014',
      subevents: [
        {
          galah: '15:00 Wita',
          pemargi: ['Matur Piuning'],
          sane_muput: ['Pemangku Pura Dalem Juga'],
          genah: ['Pura Dalem Juga', 'Pura Mrajapati,Genah Tawur', 'Pura Khayangan Tiga Lan Manca'],
          wewalian: [],
        }
      ],
      pakeling: null
    },
    {
      id: 2,
      rahina: 'Anggara Paing Bala',
      tanggal: '26 Agustus 2014',
      subevents: [
        {
          galah: '15:00 Wita',
          pemargi: ['Ngruwak, Sudha Bumi', 'Nuasen Karya', 'Ngadegan Tapini, Guru Dadi, Pangraksa Karya, Pangemit Karya', 'Ngelaran Manca Kertha', 'Nunas Panugran'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep']
        }
      ],
      pakeling: 'Tedun: Pemangku sami, Prawartaka Karya, Krama Banjar Juga',
      tags: ['Nyambut Karya']
    },
    {
      id: 3,
      rahina: 'Buda Pon Bala',
      tanggal: '27 Agustus 2014',
      subevents: [
        {
          galah: '10:00 Wita',
          pemargi: ['Nyukat Genah Tetangunan', 'Nanceb Tetangunan'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh'],
          genah: ['Pura Dalem Juga'],
          wewalian: [],
        }
      ],
      pakeling: null
    },
    {
      id: 4,
      rahina: 'Wrespati Kliwon Ukir',
      tanggal: '23 Oktober 2014',
      subevents: [
        {
          galah: '15.00 Wita',
          pemargi: ['Ngulapin Taring'],
          sane_muput: ['Pemangku Pura Dalem Juga'],
          genah: ['Pura Dalem Juga'],
          wewalian: [],
        }
      ],
      pakeling: null
    },
    {
      id: 5,
      rahina: 'Redite Kliwon Tulu',
      tanggal: '2 November 2014',
      subevents: [
        {
          galah: '09.00 Wita',
          pemargi: ['Nunas Tirtha Ngingsah, Nyangling'],
          sane_muput: ['Pemangku Pura suang-suang Pura'],
          genah: ['Pr Khayangan Tiga', 'Pr  Manca'],
          wewalian: [],
        },
        {
          galah: '15.00 Wita',
          pemargi: ['Nyengker Setra'],
          sane_muput: ['Pemangku Pura Dalem Juga', 'Pemangku Pura Puseh Juga'],
          genah: ['Pamuwunan Setra Baleran', 'Pamuwunan Setra Delodan'],
          wewalian: [],
        }
      ],
      pakeling: null
    },
    {
      id: 6,
      rahina: 'Soma Umanis Tulu',
      tanggal: '3 November 2014',
      subevents: [
        {
          galah: '09.00 Wita',
          pemargi: ['Nunas Tirtha Ngingsah'],
          sane_muput: ['Pemangku Pr Beji Br Tarukan'],
          genah: ['Pura Beji'],
          wewalian: [],
        },
        {
          galah: '10.00 Wita',
          pemargi: ['Negtegan , Ngingsah Nyangling', 'Ngugahang Sunari, Pinekan, Kukul, Ketungan'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        }
      ],
      pakeling: 'Pemangku sami tedun, lanang, Istri'
    },
    {
      id: 7,
      rahina: 'Sukra Paing Gumbreg',
      tanggal: '14 November 2014',
      subevents: [
        {
          galah: '10.00 Wita',
          pemargi: ['Memben Pedagingan', 'Nanding Pedagingan'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh', 'Ida Peranda Istri Griya Wanasari Kemenuh'],
          genah: ['Pura Dalem Juga'],
          wewalian: [],
        }
      ],
      pakeling: 'Pemangku sami tedun, lanang, Istri'
    },
    {
      id: 8,
      rahina: 'Wrespati Pon Wariga',
      tanggal: '20 November 2014',
      subevents: [
        {
          galah: '09.00 Wita',
          pemargi: ['Nunas Tirtha Pecaruan'],
          sane_muput: ['Pemangku Pura suang-suang Pura'],
          genah: ['Pr Khayangan Tiga', 'Pr Manca'],
          wewalian: [],
        }
      ],
      pakeling: null
    },
    {
      id: 9,
      rahina: 'Sukra Wage Wariga',
      tanggal: '21 November 2014',
      subevents: [
        {
          galah: '08.00 Wita',
          pemargi: ['Malik Sumpah'],
          sane_muput: ['Ida Sri Bujanga, Griya Angkling Bitra'],
          genah: ['Jaba Tengah Pura Dalem'],
          wewalian: ['Topeng Sidakarya'],
        },
        {
          galah: '11.00 Wita (Mrajapati Baleran)',
          pemargi: ['Rsi Ghana, Mapadagingan', 'Mlaspas Tetanggunan, Senjata'],
          sane_muput: ['Ida Peranda Budha Griya Taman, Sukawati'],
          genah: ['Pura Mrajapati Baleran'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        },
        {
          galah: '13.00 Wita',
          pemargi: ['Rsi Ghana, Mapadagingan', 'Mlaspas Tetanggunan'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh', 'Ida Peranda Budha Griya Gunung Sari, Peliatan'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya', 'Wayang Gedog', 'Baris Gede', 'Rejang Dewa', 'Gong Jangkep'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang-istri, Prawartaka Karya, Krama Banjar Juga',
      tags: ['Malik Sumpah', 'Rsi Ghana']
    },
    {
      id: 10,
      rahina: 'Soma Paing Warigadean',
      tanggal: '24 November 2014',
      subevents: [
        {
          galah: '10.00 Wita',
          pemargi: ['Ngadegan Bagia, Pulakerti'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh', 'Ida Peranda Istri Griya Wanasari Kemenuh'],
          genah: ['Pura Dalem Juga'],
          wewalian: [],
        }
      ],
      pakeling: 'Pemangku sami tedun'
    },
    {
      id: 11,
      rahina: 'Saniscara Wage Julungwangi',
      tanggal: '6 Desember 2014',
      subevents: [
        {
          galah: '09.00 Wita',
          pemargi: ['Mendak Pakuluh Mider'],
          sane_muput: ['Pemangku suang-suang Pura manut genah'],
          genah: ['Pura Ulun Danu Batur', 'Pura Jati, Batur', 'Pura Dalem Puri Besakih', 'Pura Penataran  Besakih', 'Giri Kusuma, Gunung Agung',
                  'Pura Lempuyang', 'Pura Sidakarya', 'Pura Ulu Watu', 'Pura Goa Lawah'],
          wewalian: [],
        },
        {
          galah: '15.00 Wita',
          pemargi: ['Mendak Pangrajeg Karya'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh'],
          genah: ['Pura Taman Pule'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        }
      ],
      pakeling: 'Penyanggra: Pemangku sami lan Krama Banjar manut Pah-pahan'
    },
    {
      id: 12,
      rahina: 'Redite Wage Kuningan',
      tanggal: '21 Desember 2014',
      subevents: [
        {
          galah: '15.00 Wita',
          pemargi: ['Mlaspas Bagia Pulakerti', 'Mendak Bagia Pulakerti'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh'],
          genah: ['Pura Taman Pule'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep', 'Gong Tabuh Lanang'],
        },
        {
          galah: '- -',
          pemargi: ['Ayaban Bagia ring Genah Melinggih'],
          sane_muput: ['Pemangku Pura Dalem Juga'],
          genah: ['Pura Dalem Juga'],
          wewalian: [],
        }
      ],
      pakeling: 'Pemangku sami lanang-istri, lan krama tedun'
    },
    {
      id: 13,
      rahina: 'Sukra Wage Kuningan',
      tanggal: '26 Desember 2014',
      subevents: [
        {
          galah: '09.00 Wita',
          pemargi: ['Nanceb Penjor'],
          sane_muput: [],
          genah: ['Ajeng angkul-angkul suang-suang'],
          wewalian: [],
        }
      ],
      pakeling: null,
      tags: ['Nanjeb penjor']
    },
    {
      id: 14,
      rahina: 'Buda Wage Langkir',
      tanggal: '31 Desember 2014',
      subevents: [
        {
          galah: '17.00 Wita',
          pemargi: ['Ngiyas Ida Bethara Pr Khayangan Tiga, Pura Manca'],
          sane_muput: ['Pemangku suang-suang Pura'],
          genah: ['Pr. Khayangan Tiga', 'Pr Manca'],
          wewalian: [],
        }
      ],
      pakeling: 'Pemargi Pemelastian sekadi pemelastian Kesangga'
    },
    {
      id: 15,
      rahina: 'Wrespati Kliwon Langkir',
      tanggal: '1 Januari 2015',
      subevents: [
        {
          galah: '09.00 Wita',
          pemargi: ['Ida Bethara Pr. Khayangan Tiga, Pr. Manca  tedun, Melasti'],
          sane_muput: ['Ida Peranda Griya Bedil, Sukawati', 'Ida Peranda Budha Griya Santian, Peliatan'],
          genah: ['Segara Purnama'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep', 'Gong Tabuh Lanang'],
        },
        {
          galah: '11.00 Wita',
          pemargi: ['Mendak Siti ( Serauh sakeng Melasti', 'Ayaban Ida Bethara ring genah Melinggih'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        },
        {
          galah: '16.00 Wita',
          pemargi: ['Mepada Alit'],
          sane_muput: ['Pemangku Pura Puseh, Juga'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Gong Jangkep'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Desa sami',
      tags: ['Melasti']
    },
    {
      id: 16,
      rahina: 'Sukra Umanis Langkir',
      tanggal: '2 Januari 2015',
      subevents: [
        {
          galah: '09.00 Wita',
          pemargi: ['Nunas Tirtha Pr Khayangan Tiga lan Pura Manca'],
          sane_muput: ['Pemangku Suang-suang Pura'],
          genah: ['Pura Khayangan Tiga', 'Pura Manca'],
          wewalian: ['Gong Jangkep'],
        },
        {
          galah: '13.00 Wita',
          pemargi: ['Ida Bethara Pr Penataran, Pura Dalem Kacangbubuan Tedun ke Pura Dalem Juga'],
          sane_muput: [],
          genah: ['Pura Dalem Juga'],
        },
        {
          galah: '16.00 Wita',
          pemargi: ['Memben Upakara'],
          sane_muput: ['Pemangku Pura Puseh, Kawan'],
          genah: ['Pura Dalem Juga'],
        }
      ],
      pakeling: 'Pemangku sami lanang, Istri lan krama tedun'
    },
    {
      id: 17,
      rahina: 'Saniscara Paing Langkir',
      tanggal: '3 Januari 2015',
      subevents: [
        {
          galah: '08.00 Wita',
          pemargi: ['Tawur Agung, Mapadanan', 'Kekundang Tawur'],
          sane_muput: ['Ida Peranda Rai Gunung, Griya Babakan', 'Ida Peranda Budha Griya Santian, Peliatan', 'Ida Sri Bujanga, Griya Angkling Bitra',
                       'Ida Bagus Ketut Adnyana, Griya Kebon Kemenuh'],
          genah: ['Genah Tawur'],
          wewalian: ['Topeng Sidakarya', 'Wayang Gedog', 'Baris Gede', 'Rejang Dewa', 'Gambuh', 'Gong Jangkep'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Desa',
      tags: ['Tawur Agung', 'Mapadanan']
    },
    {
      id: 18,
      rahina: 'Redite Pon Medangsia',
      tanggal: '4 Januari 2015',
      subevents: [
        {
          galah: '08.00 Wita',
          pemargi: ['Mepada Agung'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh'],
          genah: ['Jaba Tengah Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Banjar Juga',
      tags: ['Mepada Agung']
    },
    {
      id: 19,
      rahina: 'Soma Wage Medangsia',
      tanggal: '5 Januari 2015',
      subevents: [
        {
          galah: '15.00 Wita',
          pemargi: ['Memben Upakara'],
          sane_muput: ['Ida Peranda Grya Gede Banjarangkan, Klungkung'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Banjar Juga',
    },
    {
      id: 20,
      rahina: 'Anggara Kliwon Medangsia',
      tanggal: '6 Januari 2015',
      subevents: [
        {
          galah: '06.00 Wita',
          pemargi: ['Ngening', 'Segeh Agung', 'Makala Hyang', 'Linggih Bawa'],
          sane_muput: ['Pemangku Pura Beji Br Tarukan', 'Pemangku Pura Dalem Juga', 'Pemangku Pura Puseh, Juga', 'Pemangku Pura Desa'],
          genah: ['Pura Beji', 'Pura Dalem Juga'],
          wewalian: ['Gong Tabuh Lanang'],
        },
        {
          galah: '10.00 Wita',
          pemargi: ['Mabhuni Sudha'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh'],
          genah: ['Pura Dalem Juga'],
          wewalian: [],
        },
        {
          galah: '10.00 Wita (Mrajapati Baleran)',
          pemargi: ['Padudusan, Pangenteg Linggih'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh'],
          genah: ['Mrajapati Baleran'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        },
        {
          galah: '10.00 Wita (Mrajapati Delodan)',
          pemargi: ['Padudusan, Pangenteg Linggih'],
          sane_muput: ['Ida Peranda Griya Ketewel Kemenuh'],
          genah: ['Mrajapati Delodan'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        },
        {
          galah: '13.00 Wita',
          pemargi: ['Ngenteg Linggih', 'Padudusan Agung', 'Pakebat Daun', 'Ngusabha Dalem', 'Memasar'],
          sane_muput: ['Ida Peranda Rai Gunung, Griya Babakan (ring Ajeng)', 'Ida Peranda Budha Griya Santian, Peliatan (ring Ajeng)',
                       'Ida Peranda Griya Bedil, Sukawati (ring Paselang)', 'Ida Peranda Budha Griya Gunung Sari,Peliatan (ring Paselang)',
                       'Ida Peranda Istri Griya Wanasari, Kemenuh (Maindang-indangan)', 'Ida Peranda Istri Griya Jeroan, Kemenuh (Maindang-indangan)',
                       'Ida Peranda Griya Wanasari (Majejiwan)', 'Ida Peranda Griya Blong, Belega (Majejiwan)',
                       'Ida Peranda Istri Griya Jeroan, Kemenuh (Memasar)'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Ratu Gajah Mada', 'Ratu Lanang, Ratu Dedari', 'Gambuh', 'Parwa', 'Wayang Gedog', 'Gong Jangkep', ' Slonding'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Desa sami',
      tags: ['Puncak Karya']
    },
    {
      id: 21,
      rahina: 'Buda Umanis Medangsia',
      tanggal: '7 Januari 2015',
      subevents: [
        {
          galah: '13.00 Wita',
          pemargi: ['Penganyaran ring Prajapati Baleran', 'Penganyaran ring Prajapati Delodan'],
          sane_muput: ['Pemangku Pura Puseh, Juga', 'Pemangku Pura Puseh, Kawan'],
          genah: ['Mrajapati Baleran', 'Mrajapati Delodan'],
          wewalian: ['Angklung jangkep'],
        },
        {
          galah: '15.00 Wita',
          pemargi: ['Penganyaran ring Pura Dalem Juga'],
          sane_muput: ['Ida Peranda Griya Gede Kemenuh'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Banjar Juga',
      tags: [' Nganyaran']
    },
    {
      id: 22,
      rahina: 'Wrespati Paing Medangsia',
      tanggal: '8 Januari 2015',
      subevents: [
        {
          galah: '13.00 Wita',
          pemargi: ['Penganyaran ring Prajapati Baleran', 'Penganyaran ring Prajapati Delodan'],
          sane_muput: ['Pemangku Pura Bukit Danginan ', 'Pemangku Pura Bukit Dauhan'],
          genah: ['Mrajapati Baleran', 'Mrajapati Delodan'],
          wewalian: ['Angklung jangkep'],
        },
        {
          galah: '15.00 Wita',
          pemargi: ['Nganyaran, Ngideran Dangsil ring Pura Dalem Juga'],
          sane_muput: ['Ida Peranda Dwija Kenaka, Griya Gde Mas'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Banjar Juga',
      tags: ['Nganyaran', 'Ngideran Dangsil']
    },
    {
      id: 23,
      rahina: 'Sukra Pon Medangsia',
      tanggal: '9 Januari 2015',
      subevents: [
        {
          galah: '13.00 Wita',
          pemargi: ['Nyenukin'],
          sane_muput: ['Ida Peranda Griya Gede Kemenuh'],
          genah: ['Pura Desa'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        },
        {
          galah: '15.00 Wita',
          pemargi: ['Penganyaran ring Prajapati Baleran lan Delodan'],
          sane_muput: ['Pemangku Pura Anyar, Alitan', 'Pemangku Pura Anyar, Lingsir'],
          genah: ['Mrajapati Baleran', 'Mrajapati Delodan'],
          wewalian: ['Angklung jangkep'],
        },
        {
          galah: '16.00 Wita',
          pemargi: ['Nganyaran, Ngebek ring Pura Dalem Juga'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh', 'Ida Peranda Budha Istri. Griya Gde Batuan'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya (Ida Bagus Kt Adnyana, Ida Bagus Nyoman Sutara)', 'Gong Jangkep'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Banjar Juga.',
      tags: ['Nyenukin', 'Nganyarin Ngebek']
    },
    {
      id: 24,
      rahina: 'Saniscara Wage Medangsia',
      tanggal: '10 Januari 2015',
      subevents: [
        {
          galah: '09.00 Wita',
          pemargi: ['Penganyaran ring Prajapati Baleran lan Delodan'],
          sane_muput: ['Pemangku Pura Sakenan', 'Pemangku Pura Kaseh'],
          genah: ['Mrajapati Baleran', 'Mrajapati Delodan'],
          wewalian: ['Angklung jangkep'],
        },
        {
          galah: '10.00 Wita',
          pemargi: ['Penganyaran, Ida Bethara Budal'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        },
        {
          galah: '15.00 Wita',
          pemargi: ['Ida Bethara Pangrajeg budal'],
          sane_muput: ['Ida Peranda Griya Agung, Bitera'],
          genah: ['Pura Taman Pule'],
          wewalian: ['Gong Tabuh Lanang', 'Topeng Sidakarya'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Banjar Juga.',
      tags: ['Nganyaran', 'Ida Bethara Budal']
    },
    {
      id: 25,
      rahina: 'Redite Kliwon Pujut',
      tanggal: '11 Januari 2015',
      subevents: [
        {
          galah: '13.00 Wita',
          pemargi: ['Penganyaran ring Prajapati Baleran lan Delodan'],
          sane_muput: ['Pemangku Pura Tandruh', 'Pemangku Pura Pasek'],
          genah: ['Mrajapati Baleran', 'Mrajapati Delodan'],
          wewalian: ['Angklung jangkep'],
        },
        {
          galah: '15.00 Wita',
          pemargi: ['Nganyaran ring Pura Dalem Juga'],
          sane_muput: ['Ida Peranda Griya Agung, Bitera'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Banjar Juga.',
      tags: ['Nganyaran']
    },
    {
      id: 26,
      rahina: 'Soma Umanis Pujut',
      tanggal: '12 Januari 2015',
      subevents: [
        {
          galah: '09.00 Wita',
          pemargi: ['Penganyaran ring Prajapati Baleran lan Delodan'],
          sane_muput: ['Pemangku Pura Dalem Panglan', 'Pemangku Pura Megalan'],
          genah: ['Mrajapati Baleran', 'Mrajapati Delodan'],
          wewalian: ['Angklung jangkep'],
        },
        {
          galah: '10.00 Wita',
          pemargi: ['Nganyaran, Ngremekin, Rsi Bojana'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Banjar Juga.',
      tags: ['Nganyaran', 'Gremekin', 'Rsi Bojana']
    },
    {
      id: 27,
      rahina: 'Anggara Paing Pujut',
      tanggal: '13 Januari 2015',
      subevents: [
        {
          galah: '09.00 Wita',
          pemargi: ['Nyegara Gunung'],
          sane_muput: ['Ida Peranda Grya Gede Banjarangkan, Klungkung'],
          genah: ['Pura Goa Lawah'],
          wewalian: ['Gong Tabuh Lanang'],
        },
        {
          galah: '14.00 Wita',
          pemargi: ['Penganyaran ring Prajapati Baleran lan Delodan'],
          sane_muput: ['Pemangku Pura Ponambenan', 'Pemangku Pura Melanting'],
          genah: ['Mrajapati Baleran', 'Mrajapati Delodan'],
          wewalian: ['Angklung jangkep'],
        },
        {
          galah: '16.00 Wita',
          pemargi: ['Nganyaran, Nuwek Bagia, Nyineb'],
          sane_muput: ['Ida Peranda Griya Wanasari Kemenuh'],
          genah: ['Pura Dalem Juga'],
          wewalian: ['Topeng Sidakarya', 'Gong Jangkep'],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Banjar Juga.',
      tags: ['Nyegara Gunung', 'Nganyarin', 'Nyineb']
    },
    {
      id: 28,
      rahina: 'Buda Pon Pujut',
      tanggal: '14 Januari 2015',
      subevents: [
        {
          galah: '09.00 Wita',
          pemargi: ['Aci Penyineba ring Prajapati Baleran lan Delodan', 'Aci Penyineba ring Pura Dalem Juga'],
          sane_muput: ['Pemangku Pura Puseh, Kawan', 'Pemangku Pura Desa', 'Pemangku Pura Dalem Juga'],
          genah: ['Mrajapati Baleran', 'Mrajapati Delodan', 'Pura Dalem Juga'],
          wewalian: [],
        }
      ],
      pakeling: 'Tedun: Pemangku sami Lanang, istri, Prawartaka Karya, Krama Banjar Juga matebasan.',
      tags: ['Aci Panyineban']
    },
  ];

  return {
    all: function() {
      return events;
    },
    get: function(eventId) {
      var event = null;
      angular.forEach(events, function(obj, index){
        if(obj.id == eventId){
          event = obj;
          return;
        }
      });
      return event;
    }
  }
});
