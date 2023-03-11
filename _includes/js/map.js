window.conference.map = (() => {
    let config;
    let lang;

    let map;

    const setup = (elId) => {
        map = L.map(elId).setView([28.360176, -81.510195], 16);

        L.tileLayer.provider(config.map_provider).addTo(map);

        L.easyButton('far fa-star', () => {
            map.flyTo(config.home_coord, config.default_zoom);
        }, lang.focus_conf).addTo(map);

        L.control.locate({
            flyTo: true,
            strings: {
                title: lang.focus_me
            }
        }).addTo(map);

        let main = L.marker([28.360176, -81.510195], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-train"></span> ACM FCRC 2023',
                iconSize: [120, 56]
            })
        }).addTo(map);
    };

    const init = (c, l) => {
        config = c;
        lang = l;

        const elId = 'map';

        if (document.getElementById(elId)) {
            setup(elId);
        }
    };

    const getMap = () => {
        return map
    };

    return {
        init: init,
        getMap: getMap
    };
})();
