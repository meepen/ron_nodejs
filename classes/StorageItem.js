"use strict";

const util = require("util");
const EquipmentItem = require("./EquipmentItem.js");
const EquipmentItemTypes = require("../EquipmentItemTypes.js");

let StorageItem = function StorageItem(buf)
{

    this.BufferLeft = buf.slice(2);

    this.Class = buf.readInt8(0);
    this.BaseEP = buf.readInt8(1);

}

util.inherits(StorageItem, EquipmentItem);

StorageItem.prototype.GetName = function()
{
    switch (this.Class)
    {
    default:
    	return "Unknown?";
    case -126:
    	return "Hold-H1A";
    case -125:
    	return "Hold-H2A";
    case -124:
    	return "Hold-H1B";
    case -123:
    	return "Hold-H2B";
    case -122:
    	return "Hold-H1G";
    case -121:
    	return "Hold-H2G";
    case -120:
    	return "Hold-P1A";
    case -119:
    	return "Hold-P2A";
    case -118:
    	return "Hold-P1B";
    case -117:
    	return "Hold-P2B";
    case -116:
    	return "Hold-P1G";
    case -115:
    	return "Hold-P2G";
    case -114:
    	return "Hold-W1A";
    case -113:
    	return "Hold-W2A";
    case -112:
    	return "Hold-W1B";
    case -111:
    	return "Hold-W2B";
    case -110:
    	return "Hold-W1G";
    case -109:
    	return "Hold-W2G";
    case -108:
    	return "Hold-R1A";
    case -107:
    	return "Hold-R2A";
    case -106:
    	return "Hold-R1B";
    case -105:
    	return "Hold-R2B";
    case -104:
    	return "Hold-R1G";
    case -103:
    	return "Hold-R2G";
    case -102:
    	return "Hold-H102";
    case -101:
    	return "Hold-H103";
    case -100:
    	return "Hold-H104";
    case -99:
    	return "Hold-H105";
    case -98:
    	return "Hold-H106";
    case -97:
    	return "Hold-H107";
    case -96:
    	return "Hold-H108";
    case -95:
    	return "Hold-H109";
    case -94:
    	return "Hold-H110";
    case -93:
    	return "Hold-H111";
    case -92:
    	return "Hold-H112";
    case -91:
    	return "Hold-H113";
    case -90:
    	return "Hold-H114";
    case -89:
    	return "Hold-H115";
    case -88:
    	return "Hold-H116";
    case -87:
    	return "Hold-H117";
    case -86:
    	return "Hold-H118";
    case -85:
    	return "Hold-H119";
    case -84:
    	return "Hold-H120";
    case -83:
    	return "Hold-H121";
    case -82:
    	return "Hold-H122";
    case -81:
    	return "Hold-H123";
    case -80:
    	return "Hold-H124";
    case -79:
    	return "Hold-H125";
    case -78:
    	return "Hold-H202";
    case -77:
    	return "Hold-H203";
    case -76:
    	return "Hold-H204";
    case -75:
    	return "Hold-H205";
    case -74:
    	return "Hold-H206";
    case -73:
    	return "Hold-H207";
    case -72:
    	return "Hold-H208";
    case -71:
    	return "Hold-H209";
    case -70:
    	return "Hold-H210";
    case -69:
    	return "Hold-H211";
    case -68:
    	return "Hold-H212";
    case -67:
    	return "Hold-H213";
    case -66:
    	return "Hold-H214";
    case -65:
    	return "Hold-H215";
    case -64:
    	return "Hold-H216";
    case -63:
    	return "Hold-H217";
    case -62:
    	return "Hold-H218";
    case -61:
    	return "Hold-H219";
    case -60:
    	return "Hold-H220";
    case -59:
    	return "Hold-H221";
    case -58:
    	return "Hold-H222";
    case -57:
    	return "Hold-H223";
    case -56:
    	return "Hold-H224";
    case -55:
    	return "Hold-H225";
    case -54:
    	return "Hold-P102";
    case -53:
    	return "Hold-P103";
    case -52:
    	return "Hold-P104";
    case -51:
    	return "Hold-P105";
    case -50:
    	return "Hold-P106";
    case -49:
    	return "Hold-P107";
    case -48:
    	return "Hold-P108";
    case -47:
    	return "Hold-P109";
    case -46:
    	return "Hold-P110";
    case -45:
    	return "Hold-P111";
    case -44:
    	return "Hold-P112";
    case -43:
    	return "Hold-P113";
    case -42:
    	return "Hold-P114";
    case -41:
    	return "Hold-P115";
    case -40:
    	return "Hold-P116";
    case -39:
    	return "Hold-P117";
    case -38:
    	return "Hold-P118";
    case -37:
    	return "Hold-P119";
    case -36:
    	return "Hold-P120";
    case -35:
    	return "Hold-P121";
    case -34:
    	return "Hold-P122";
    case -33:
    	return "Hold-P123";
    case -32:
    	return "Hold-P124";
    case -31:
    	return "Hold-P125";
    case -30:
    	return "Hold-P202";
    case -29:
    	return "Hold-P203";
    case -28:
    	return "Hold-P204";
    case -27:
    	return "Hold-P205";
    case -26:
    	return "Hold-P206";
    case -25:
    	return "Hold-P207";
    case -24:
    	return "Hold-P208";
    case -23:
    	return "Hold-P209";
    case -22:
    	return "Hold-P210";
    case -21:
    	return "Hold-P211";
    case -20:
    	return "Hold-P212";
    case -19:
    	return "Hold-P213";
    case -18:
    	return "Hold-P214";
    case -17:
    	return "Hold-P215";
    case -16:
    	return "Hold-P216";
    case -15:
    	return "Hold-P217";
    case -14:
    	return "Hold-P218";
    case -13:
    	return "Hold-P219";
    case -12:
    	return "Hold-P220";
    case -11:
    	return "Hold-P221";
    case -10:
    	return "Hold-P222";
    case -9:
    	return "Hold-P223";
    case -8:
    	return "Hold-P224";
    case -7:
    	return "Hold-P225";
    case -6:
    	return "Hold-W102";
    case -5:
    	return "Hold-W103";
    case -4:
    	return "Hold-W104";
    case -3:
    	return "Hold-W105";
    case -2:
    	return "Hold-W106";
    case -1:
    	return "Hold-W107";
    case 0:
    	return "Hold-W108";
    case 1:
    	return "Hold-W109";
    case 2:
    	return "Hold-W110";
    case 3:
    	return "Hold-W111";
    case 4:
    	return "Hold-W112";
    case 5:
    	return "Hold-W113";
    case 6:
    	return "Hold-W114";
    case 7:
    	return "Hold-W115";
    case 8:
    	return "Hold-W116";
    case 9:
    	return "Hold-W117";
    case 10:
    	return "Hold-W118";
    case 11:
    	return "Hold-W119";
    case 12:
    	return "Hold-W120";
    case 13:
    	return "Hold-W121";
    case 14:
    	return "Hold-W122";
    case 15:
    	return "Hold-W123";
    case 16:
    	return "Hold-W124";
    case 17:
    	return "Hold-W125";
    case 18:
    	return "Hold-W202";
    case 19:
    	return "Hold-W203";
    case 20:
    	return "Hold-W204";
    case 21:
    	return "Hold-W205";
    case 22:
    	return "Hold-W206";
    case 23:
    	return "Hold-W207";
    case 24:
    	return "Hold-W208";
    case 25:
    	return "Hold-W209";
    case 26:
    	return "Hold-W210";
    case 27:
    	return "Hold-W211";
    case 28:
    	return "Hold-W212";
    case 29:
    	return "Hold-W213";
    case 30:
    	return "Hold-W214";
    case 31:
    	return "Hold-W215";
    case 32:
    	return "Hold-W216";
    case 33:
    	return "Hold-W217";
    case 34:
    	return "Hold-W218";
    case 35:
    	return "Hold-W219";
    case 36:
    	return "Hold-W220";
    case 37:
    	return "Hold-W221";
    case 38:
    	return "Hold-W222";
    case 39:
    	return "Hold-W223";
    case 40:
    	return "Hold-W224";
    case 41:
    	return "Hold-W225";
    case 42:
    	return "Hold-R102";
    case 43:
    	return "Hold-R103";
    case 44:
    	return "Hold-R104";
    case 45:
    	return "Hold-R105";
    case 46:
    	return "Hold-R106";
    case 47:
    	return "Hold-R107";
    case 48:
    	return "Hold-R108";
    case 49:
    	return "Hold-R109";
    case 50:
    	return "Hold-R110";
    case 51:
    	return "Hold-R111";
    case 52:
    	return "Hold-R112";
    case 53:
    	return "Hold-R113";
    case 54:
    	return "Hold-R114";
    case 55:
    	return "Hold-R115";
    case 56:
    	return "Hold-R116";
    case 57:
    	return "Hold-R117";
    case 58:
    	return "Hold-R118";
    case 59:
    	return "Hold-R119";
    case 60:
    	return "Hold-R120";
    case 61:
    	return "Hold-R121";
    case 62:
    	return "Hold-R122";
    case 63:
    	return "Hold-R123";
    case 64:
    	return "Hold-R124";
    case 65:
    	return "Hold-R125";
    case 66:
    	return "Hold-R202";
    case 67:
    	return "Hold-R203";
    case 68:
    	return "Hold-R204";
    case 69:
    	return "Hold-R205";
    case 70:
    	return "Hold-R206";
    case 71:
    	return "Hold-R207";
    case 72:
    	return "Hold-R208";
    case 73:
    	return "Hold-R209";
    case 74:
    	return "Hold-R210";
    case 75:
    	return "Hold-R211";
    case 76:
    	return "Hold-R212";
    case 77:
    	return "Hold-R213";
    case 78:
    	return "Hold-R214";
    case 79:
    	return "Hold-R215";
    case 80:
    	return "Hold-R216";
    case 81:
    	return "Hold-R217";
    case 82:
    	return "Hold-R218";
    case 83:
    	return "Hold-R219";
    case 84:
    	return "Hold-R220";
    case 85:
    	return "Hold-R221";
    case 86:
    	return "Hold-R222";
    case 87:
    	return "Hold-R223";
    case 88:
    	return "Hold-R224";
    case 89:
    	return "Hold-R225";
    case 90:
    	return "Big Crate";
    case 91:
    	return "Really Big Crate";
    }
}

module.exports = StorageItem;
