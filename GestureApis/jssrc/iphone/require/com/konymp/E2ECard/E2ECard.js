define(function() {
    return function(controller) {
        var E2ECard = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "E2ECard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_i7ed359eec8540ce91595bc4d25bfbd0,
            "skin": "konympcorousel1sknFlxWhiteBackground",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        E2ECard.setDefaultUnit(kony.flex.DP);
        var segCarousel1 = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "groupCells": false,
            "height": "35%",
            "id": "segCarousel1",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": false,
            "onSwipe": controller.AS_Segment_cc4a496983724c0d906f04a301e2f1e7,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg2",
            "rowSkin": "Copyseg3",
            "scrollingEvents": {},
            "sectionHeaderSkin": "CopysliPhoneSegmentHeader1",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorRequired": false,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "width": "100%",
            "zIndex": 2
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": false,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_ROW_SELECT,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        });
        var lblHeading = new kony.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "5%",
            "skin": "konympcarouselsknLblSFUIBOLD135",
            "text": "Litore Resort Hotel & SPA",
            "top": "35%",
            "width": "70%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblPrice = new kony.ui.Label({
            "id": "lblPrice",
            "isVisible": true,
            "right": "5.50%",
            "skin": "konympcarouselsknLblSFUIBOLD114",
            "text": "$119.94",
            "top": "35.40%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxStar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxStar",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "skin": "CopyslFbox1",
            "top": "39.40%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxStar.setDefaultUnit(kony.flex.DP);
        var imgStar1 = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgStar1",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_star_active.png",
            "top": "0%",
            "width": "20dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgStar2 = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgStar2",
            "isVisible": true,
            "left": "0.50%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_star_active.png",
            "top": "0%",
            "width": "20dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgStar3 = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgStar3",
            "isVisible": true,
            "left": "0.50%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_star_active.png",
            "top": "0%",
            "width": "20dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgStar4 = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgStar4",
            "isVisible": true,
            "left": "0.50%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_star_active.png",
            "top": "0%",
            "width": "20dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgStar5 = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgStar5",
            "isVisible": true,
            "left": "0.50%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_star_inactive.png",
            "top": "0%",
            "width": "20dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxStar.add(imgStar1, imgStar2, imgStar3, imgStar4, imgStar5);
        var imgLocation = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgLocation",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_location.png",
            "top": "44%",
            "width": "20dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblLocation = new kony.ui.Label({
            "id": "lblLocation",
            "isVisible": true,
            "left": "11.50%",
            "skin": "konympcarousel1sknLblSFUIRegularGrey100",
            "text": "Am Rehspung 35, Holzlar, 53229 New York, USA",
            "top": "44%",
            "width": "58%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var mapView = new kony.ui.Map({
            "calloutWidth": 80,
            "defaultPinImage": "location1.png",
            "height": "60dp",
            "id": "mapView",
            "isVisible": true,
            "provider": constants.MAP_PROVIDER_GOOGLE,
            "right": "5.50%",
            "top": "42.70%",
            "width": "85dp",
            "zIndex": 2
        }, {}, {
            "mode": constants.MAP_VIEW_MODE_NORMAL,
            "showCurrentLocation": constants.MAP_VIEW_SHOW_CURRENT_LOCATION_NONE,
            "zoomLevel": 20
        });
        var lblServicesIncluded = new kony.ui.Label({
            "id": "lblServicesIncluded",
            "isVisible": true,
            "left": "5%",
            "skin": "konympcarousel1sknLbl100BoldSFUI",
            "text": "Services included:",
            "top": "52%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxBookHotel = new kony.ui.FlexContainer({
            "centerX": "50%",
            "clipBounds": true,
            "height": "6.50%",
            "id": "flxBookHotel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onTouchStart": controller.AS_FlexContainer_h77316e20e3541a5bdcb28d3179e08e0,
            "skin": "konympcarousel1sknFLxButton",
            "top": "91%",
            "width": "93.10%",
            "zIndex": 2
        }, {}, {});
        flxBookHotel.setDefaultUnit(kony.flex.DP);
        var lblButton = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblButton",
            "isVisible": true,
            "skin": "konympcarousel1sknLblWhite114SFRegular",
            "text": "Book Hotel",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxBookHotel.add(lblButton);
        var flxBody = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35%",
            "id": "flxBody",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "CopyslFbox1",
            "top": "56%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxBody.setDefaultUnit(kony.flex.DP);
        var flxWifi = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxWifi",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox1",
            "top": "2%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxWifi.setDefaultUnit(kony.flex.DP);
        var imgWifi = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgWifi",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_wifi.png",
            "top": "0%",
            "width": "25dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblWifi = new kony.ui.Label({
            "id": "lblWifi",
            "isVisible": true,
            "left": "15.50%",
            "skin": "konympcarousel1SFUIRegularBlack114",
            "text": "Free Wifi",
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxWifi.add(imgWifi, lblWifi);
        var flxParking = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxParking",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox1",
            "top": "2%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxParking.setDefaultUnit(kony.flex.DP);
        var imgParking = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgParking",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_parking.png",
            "top": "0%",
            "width": "25dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblParking = new kony.ui.Label({
            "id": "lblParking",
            "isVisible": true,
            "left": "15.50%",
            "skin": "konympcarousel1SFUIRegularBlack114",
            "text": "Free Parking",
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxParking.add(imgParking, lblParking);
        var flxGreatView = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxGreatView",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox1",
            "top": "2%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxGreatView.setDefaultUnit(kony.flex.DP);
        var imgGreatView = new kony.ui.Image2({
            "height": "23dp",
            "id": "imgGreatView",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_view.png",
            "top": "0%",
            "width": "25dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblGreatView = new kony.ui.Label({
            "id": "lblGreatView",
            "isVisible": true,
            "left": "15.50%",
            "skin": "konympcarousel1SFUIRegularBlack114",
            "text": "Great View",
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxGreatView.add(imgGreatView, lblGreatView);
        var flxKingSizeBed = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxKingSizeBed",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox1",
            "top": "2%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxKingSizeBed.setDefaultUnit(kony.flex.DP);
        var imgKingSizeBed = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgKingSizeBed",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_bed.png",
            "top": "0%",
            "width": "25dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblKingSizeBed = new kony.ui.Label({
            "id": "lblKingSizeBed",
            "isVisible": true,
            "left": "15.50%",
            "skin": "konympcarousel1SFUIRegularBlack114",
            "text": "King Size Bed",
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxKingSizeBed.add(imgKingSizeBed, lblKingSizeBed);
        var flxTaxiBooking = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxTaxiBooking",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox1",
            "top": "2%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxTaxiBooking.setDefaultUnit(kony.flex.DP);
        var imgTaxiBooking = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgTaxiBooking",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_taxi.png",
            "top": "0%",
            "width": "25dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTaxiBooking = new kony.ui.Label({
            "id": "lblTaxiBooking",
            "isVisible": true,
            "left": "15.50%",
            "skin": "konympcarousel1SFUIRegularBlack114",
            "text": "Taxi Booking",
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxTaxiBooking.add(imgTaxiBooking, lblTaxiBooking);
        var flxDisGuests = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxDisGuests",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox1",
            "top": "2%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxDisGuests.setDefaultUnit(kony.flex.DP);
        var imgDisGuests = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgDisGuests",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_disabled.png",
            "top": "0%",
            "width": "25dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDisGuests = new kony.ui.Label({
            "id": "lblDisGuests",
            "isVisible": true,
            "left": "15.50%",
            "skin": "konympcarousel1SFUIRegularBlack114",
            "text": "Facilities for disabled guests",
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxDisGuests.add(imgDisGuests, lblDisGuests);
        flxBody.add(flxWifi, flxParking, flxGreatView, flxKingSizeBed, flxTaxiBooking, flxDisGuests);
        E2ECard.add(segCarousel1, lblHeading, lblPrice, flxStar, imgLocation, lblLocation, mapView, lblServicesIncluded, flxBookHotel, flxBody);
        return E2ECard;
    }
})