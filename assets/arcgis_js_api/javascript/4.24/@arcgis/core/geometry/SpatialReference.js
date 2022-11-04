/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{clone as e}from"../core/lang.js";import{I as f}from"../chunks/ensureType.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{w as n}from"../chunks/writer.js";import{i as a,a as s}from"../chunks/maybe.js";import{r as l}from"../chunks/string.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";var d;let _;!function(r){r[r.CGCS2000=4490]="CGCS2000",r[r.GCSMARS2000=104971]="GCSMARS2000",r[r.GCSMARS2000_SPHERE=104905]="GCSMARS2000_SPHERE",r[r.GCSMOON2000=104903]="GCSMOON2000"}(d||(d={}));const u={values:[1,.3048,.3048006096012192,.3047972654,.9143917962,.201166195164,.9143984146160287,.3047994715386762,20.11676512155263,20.11678249437587,.9143985307444408,.91439523,.3047997101815088,20.1168,20.116756,5e4,15e4],units:["Meter","Foot","Foot_US","Foot_Clarke","Yard_Clarke","Link_Clarke","Yard_Sears","Foot_Sears","Chain_Sears","Chain_Benoit_1895_B","Yard_Indian","Yard_Indian_1937","Foot_Gold_Coast","Chain","Chain_Sears_1922_Truncated","50_Kilometers","150_Kilometers"],2066:5,2136:12,2155:2,2157:0,2158:0,2159:12,2160:12,2204:2,2219:0,2220:0,2254:2,2255:2,2256:1,2265:1,2266:1,2267:2,2268:2,2269:1,2270:1,2271:2,2272:2,2273:1,2294:0,2295:0,2314:3,2899:2,2900:2,2901:1,2909:1,2910:1,2911:2,2912:2,2913:1,2914:1,2992:1,2993:0,2994:1,3080:1,3089:2,3090:0,3091:2,3102:2,3141:0,3142:0,3167:14,3359:2,3360:0,3361:1,3362:0,3363:2,3364:0,3365:2,3366:3,3404:2,3405:0,3406:0,3407:3,3439:0,3440:0,3479:1,3480:0,3481:1,3482:0,3483:1,3484:0,3485:2,3486:0,3487:2,3488:0,3489:0,3490:2,3491:0,3492:2,3493:0,3494:2,3495:0,3496:2,3497:0,3498:2,3499:0,3500:2,3501:0,3502:2,3503:0,3504:2,3505:0,3506:2,3507:0,3508:2,3509:0,3510:2,3511:0,3512:2,3513:0,3514:0,3515:2,3516:0,3517:2,3518:0,3519:2,3520:0,3521:2,3522:0,3523:2,3524:0,3525:2,3526:0,3527:2,3528:0,3529:2,3530:0,3531:2,3532:0,3533:2,3534:0,3535:2,3536:0,3537:2,3538:0,3539:2,3540:0,3541:2,3542:0,3543:2,3544:0,3545:2,3546:0,3547:2,3548:0,3549:2,3550:0,3551:2,3552:0,3553:2,3582:2,3583:0,3584:2,3585:0,3586:2,3587:0,3588:1,3589:0,3590:1,3591:0,3592:0,3593:1,3598:2,3599:0,3600:2,3605:1,3606:0,3607:0,3608:2,3609:0,3610:2,3611:0,3612:2,3613:0,3614:2,3615:0,3616:2,3617:0,3618:2,3619:0,3620:2,3621:0,3622:2,3623:0,3624:2,3625:0,3626:2,3627:0,3628:2,3629:0,3630:2,3631:0,3632:2,3633:0,3634:1,3635:0,3636:1,3640:2,3641:0,3642:2,3643:0,3644:1,3645:0,3646:1,3647:0,3648:1,3649:0,3650:2,3651:0,3652:2,3653:0,3654:2,3655:0,3656:1,3657:0,3658:2,3659:0,3660:2,3661:0,3662:2,3663:0,3664:2,3668:2,3669:0,3670:2,3671:0,3672:2,3673:0,3674:2,3675:0,3676:1,3677:2,3678:0,3679:1,3680:2,3681:0,3682:1,3683:2,3684:0,3685:0,3686:2,3687:0,3688:2,3689:0,3690:2,3691:0,3692:2,3696:2,3697:0,3698:2,3699:0,3700:2,3793:0,3794:0,3812:0,3854:0,3857:0,3920:0,3978:0,3979:0,3991:2,3992:2,4026:0,4037:0,4038:0,4071:0,4082:0,4083:0,4087:0,4088:0,4217:2,4414:0,4415:0,4417:0,4434:0,4437:0,4438:2,4439:2,4462:0,4467:0,4471:0,4474:0,4559:0,4647:0,4822:0,4826:0,4839:0,5018:0,5048:0,5167:0,5168:0,5221:0,5223:0,5234:0,5235:0,5243:0,5247:0,5266:0,5316:0,5320:0,5321:0,5325:0,5337:0,5361:0,5362:0,5367:0,5382:0,5383:0,5396:0,5456:0,5457:0,5469:0,5472:4,5490:0,5513:0,5514:0,5523:0,5559:0,5588:1,5589:3,5596:0,5627:0,5629:0,5641:0,5643:0,5644:0,5646:2,5654:2,5655:2,5659:0,5700:0,5825:0,5836:0,5837:0,5839:0,5842:0,5844:0,5858:0,5879:0,5880:0,5887:0,5890:0,6128:1,6129:1,6141:1,6204:0,6210:0,6211:0,6307:0,6312:0,6316:0,6362:0,6391:1,6405:1,6406:0,6407:1,6408:0,6409:1,6410:0,6411:2,6412:0,6413:2,6414:0,6415:0,6416:2,6417:0,6418:2,6419:0,6420:2,6421:0,6422:2,6423:0,6424:2,6425:0,6426:2,6427:0,6428:2,6429:0,6430:2,6431:0,6432:2,6433:0,6434:2,6435:0,6436:2,6437:0,6438:2,6439:0,6440:0,6441:2,6442:0,6443:2,6444:0,6445:2,6446:0,6447:2,6448:0,6449:2,6450:0,6451:2,6452:0,6453:2,6454:0,6455:2,6456:0,6457:2,6458:0,6459:2,6460:0,6461:2,6462:0,6463:2,6464:0,6465:2,6466:0,6467:2,6468:0,6469:2,6470:0,6471:2,6472:0,6473:2,6474:0,6475:2,6476:0,6477:2,6478:0,6479:2,6484:2,6485:0,6486:2,6487:0,6488:2,6489:0,6490:2,6491:0,6492:2,6493:0,6494:1,6495:0,6496:1,6497:0,6498:0,6499:1,6500:0,6501:2,6502:0,6503:2,6504:0,6505:2,6506:0,6507:2,6508:0,6509:0,6510:2,6515:1,6516:0,6518:0,6519:2,6520:0,6521:2,6522:0,6523:2,6524:0,6525:2,6526:0,6527:2,6528:0,6529:2,6530:0,6531:2,6532:0,6533:2,6534:0,6535:2,6536:0,6537:2,6538:0,6539:2,6540:0,6541:2,6542:0,6543:2,6544:0,6545:1,6546:0,6547:1,6548:0,6549:2,6550:0,6551:2,6552:0,6553:2,6554:0,6555:2,6556:0,6557:1,6558:0,6559:1,6560:0,6561:1,6562:0,6563:2,6564:0,6565:2,6566:0,6567:0,6568:2,6569:0,6570:1,6571:0,6572:2,6573:0,6574:2,6575:0,6576:2,6577:0,6578:2,6582:2,6583:0,6584:2,6585:0,6586:2,6587:0,6588:2,6589:0,6590:2,6591:0,6592:0,6593:2,6594:0,6595:2,6596:0,6597:2,6598:0,6599:2,6600:0,6601:2,6602:0,6603:2,6605:2,6606:0,6607:2,6608:0,6609:2,6610:0,6611:0,6612:2,6613:0,6614:2,6615:0,6616:2,6617:0,6618:2,6633:2,6646:0,6703:0,6784:0,6785:1,6786:0,6787:1,6788:0,6789:1,6790:0,6791:1,6792:0,6793:1,6794:0,6795:1,6796:0,6797:1,6798:0,6799:1,6800:0,6801:1,6802:0,6803:1,6804:0,6805:1,6806:0,6807:1,6808:0,6809:1,6810:0,6811:1,6812:0,6813:1,6814:0,6815:1,6816:0,6817:1,6818:0,6819:1,6820:0,6821:1,6822:0,6823:1,6824:0,6825:1,6826:0,6827:1,6828:0,6829:1,6830:0,6831:1,6832:0,6833:1,6834:0,6835:1,6836:0,6837:1,6838:0,6839:1,6840:0,6841:1,6842:0,6843:1,6844:0,6845:1,6846:0,6847:1,6848:0,6849:1,6850:0,6851:1,6852:0,6853:1,6854:0,6855:1,6856:0,6857:1,6858:0,6859:1,6860:0,6861:1,6862:0,6863:1,6867:0,6868:1,6870:0,6875:0,6876:0,6879:0,6880:2,6884:0,6885:1,6886:0,6887:1,6915:0,6922:0,6923:2,6924:0,6925:2,6962:0,6984:0,6991:0,7128:2,7131:0,7132:2,7142:0,7257:0,7258:2,7259:0,7260:2,7261:0,7262:2,7263:0,7264:2,7265:0,7266:2,7267:0,7268:2,7269:0,7270:2,7271:0,7272:2,7273:0,7274:2,7275:0,7276:2,7277:0,7278:2,7279:0,7280:2,7281:0,7282:2,7283:0,7284:2,7285:0,7286:2,7287:0,7288:2,7289:0,7290:2,7291:0,7292:2,7293:0,7294:2,7295:0,7296:2,7297:0,7298:2,7299:0,7300:2,7301:0,7302:2,7303:0,7304:2,7305:0,7306:2,7307:0,7308:2,7309:0,7310:2,7311:0,7312:2,7313:0,7314:2,7315:0,7316:2,7317:0,7318:2,7319:0,7320:2,7321:0,7322:2,7323:0,7324:2,7325:0,7326:2,7327:0,7328:2,7329:0,7330:2,7331:0,7332:2,7333:0,7334:2,7335:0,7336:2,7337:0,7338:2,7339:0,7340:2,7341:0,7342:2,7343:0,7344:2,7345:0,7346:2,7347:0,7348:2,7349:0,7350:2,7351:0,7352:2,7353:0,7354:2,7355:0,7356:2,7357:0,7358:2,7359:0,7360:2,7361:0,7362:2,7363:0,7364:2,7365:0,7366:2,7367:0,7368:2,7369:0,7370:2,7877:0,7878:0,7882:0,7883:0,7887:0,7899:0,7991:0,7992:0,8035:2,8036:2,8058:0,8059:0,8082:0,8083:0,8088:0,8090:0,8091:2,8092:0,8093:2,8095:0,8096:2,8097:0,8098:2,8099:0,8100:2,8101:0,8102:2,8103:0,8104:2,8105:0,8106:2,8107:0,8108:2,8109:0,8110:2,8111:0,8112:2,8113:0,8114:2,8115:0,8116:2,8117:0,8118:2,8119:0,8120:2,8121:0,8122:2,8123:0,8124:2,8125:0,8126:2,8127:0,8128:2,8129:0,8130:2,8131:0,8132:2,8133:0,8134:2,8135:0,8136:2,8137:0,8138:2,8139:0,8140:2,8141:0,8142:2,8143:0,8144:2,8145:0,8146:2,8147:0,8148:2,8149:0,8150:2,8151:0,8152:2,8153:0,8154:2,8155:0,8156:2,8157:0,8158:2,8159:0,8160:2,8161:0,8162:2,8163:0,8164:2,8165:0,8166:2,8167:0,8168:2,8169:0,8170:2,8171:0,8172:2,8173:0,8177:2,8179:0,8180:2,8181:0,8182:2,8184:0,8185:2,8187:0,8189:2,8191:0,8193:2,8196:0,8197:2,8198:0,8200:2,8201:0,8202:2,8203:0,8204:2,8205:0,8206:2,8207:0,8208:2,8209:0,8210:2,8212:0,8213:2,8214:0,8216:2,8218:0,8220:2,8222:0,8224:2,8225:0,8226:2,8311:0,8312:1,8313:0,8314:1,8315:0,8316:1,8317:0,8318:1,8319:0,8320:1,8321:0,8322:1,8323:0,8324:1,8325:0,8326:1,8327:0,8328:1,8329:0,8330:1,8331:0,8332:1,8333:0,8334:1,8335:0,8336:1,8337:0,8338:1,8339:0,8340:1,8341:0,8342:1,8343:0,8344:1,8345:0,8346:1,8347:0,8348:1,8352:0,8353:0,8379:0,8380:2,8381:0,8382:2,8383:0,8384:2,8385:0,8387:2,8391:0,8395:0,8433:0,8441:0,8455:0,8456:0,8531:2,8682:0,8686:0,8687:0,8692:0,8693:0,8826:0,8903:0,8950:0,8951:0,9039:0,9040:0,9141:0,9149:0,9150:0,9191:0,9221:0,9222:0,9249:0,9250:0,9252:0,9254:0,9265:0,9284:0,9285:0,9300:0,9354:0,9367:0,9373:0,9377:0,9387:0,9391:0,9456:0,9473:0,9498:0,9674:0,9678:0,9680:0,9709:0,9712:0,9713:0,9716:0,9741:0,9748:2,9749:2,9761:0,9766:0,20499:0,20538:0,20539:0,20790:0,20791:0,21291:0,21292:0,21500:0,21817:0,21818:0,22032:0,22033:0,22091:0,22092:0,22332:0,22391:0,22392:0,22700:0,22770:0,22780:0,22832:0,23090:0,23095:0,23239:0,23240:0,23433:0,23700:0,24047:0,24048:0,24100:3,24200:0,24305:0,24306:0,24382:10,24383:0,24500:0,24547:0,24548:0,24571:9,24600:0,25e3:0,25231:0,25884:0,25932:0,26237:0,26331:0,26332:0,26432:0,26591:0,26592:0,26632:0,26692:0,27120:0,27200:0,27291:6,27292:6,27429:0,27492:0,27493:0,27500:0,27700:0,28232:0,28600:0,28991:0,28992:0,29100:0,29101:0,29220:0,29221:0,29333:0,29635:0,29636:0,29701:0,29738:0,29739:0,29849:0,29850:0,29871:8,29872:7,29873:0,29874:0,30200:5,30339:0,30340:0,30591:0,30592:0,30791:0,30792:0,30800:0,31028:0,31121:0,31154:0,31170:0,31171:0,31370:0,31528:0,31529:0,31600:0,31700:0,31838:0,31839:0,31900:0,31901:0,32061:0,32062:0,32098:0,32099:2,32100:0,32104:0,32161:0,32766:0,53048:0,53049:0,54090:0,54091:0,65061:2,65062:2,65161:0,65163:0,102041:2,102064:11,102068:15,102069:16,102118:2,102119:1,102120:2,102121:2,102217:2,102218:0,102219:2,102220:2,102378:1,102379:1,102380:0,102381:1,102589:2,102599:2,102600:2,102604:2,102647:0,102704:2,102705:2,102706:0,102759:1,102760:1,102761:2,102762:0,102763:2,102764:0,102765:0,102766:2,102970:1,102974:2,102993:0,102994:0,102995:2,102996:2,103015:0,103016:2,103017:0,103018:2,103025:0,103026:0,103027:2,103028:2,103035:0,103036:0,103037:2,103038:2,103039:0,103040:0,103041:2,103042:2,103043:0,103044:0,103045:2,103046:2,103047:0,103048:0,103049:2,103050:2,103051:0,103052:2,103053:0,103054:2,103055:0,103056:2,103057:0,103058:0,103059:2,103060:2,103061:0,103062:0,103063:2,103064:2,103069:2,103070:0,103071:0,103072:2,103073:2,103086:0,103087:0,103088:2,103089:2,103094:1,103095:0,103096:2,103103:0,103104:2,103105:0,103106:2,103121:0,103122:2,103123:0,103124:0,103125:1,103126:1,103127:0,103128:0,103129:2,103130:2,103131:0,103132:0,103133:2,103134:2,103135:0,103136:0,103137:1,103138:1,103139:0,103140:2,103141:0,103142:2,103143:0,103144:2,103145:0,103146:1,103147:0,103148:0,103149:2,103150:2,103151:0,103152:2,103172:0,103173:2,103174:0,103175:0,103176:2,103177:2,103178:0,103179:0,103180:2,103181:2,103182:0,103183:0,103184:2,103185:2,103228:0,103229:0,103230:2,103231:2,103250:0,103251:2,103252:0,103253:2,103260:0,103261:0,103262:2,103263:2,103270:0,103271:0,103272:2,103273:2,103274:0,103275:0,103276:2,103277:2,103278:0,103279:0,103280:2,103281:2,103282:0,103283:0,103284:2,103285:2,103286:0,103287:2,103288:0,103289:2,103290:0,103291:2,103292:0,103293:0,103294:2,103295:2,103296:0,103297:0,103298:2,103299:2,103376:2,103377:0,103378:0,103379:2,103380:2,103393:0,103394:0,103395:2,103396:2,103472:0,103473:1,103474:0,103475:2,103482:0,103483:2,103484:0,103485:2,103500:0,103501:2,103502:0,103503:0,103504:1,103505:1,103506:0,103507:0,103508:2,103509:2,103510:0,103511:0,103512:2,103513:2,103514:0,103515:2,103516:0,103517:2,103518:0,103519:2,103520:0,103521:1,103522:0,103523:0,103524:2,103525:2,103526:0,103527:2,103561:2,103562:2,103563:0,103564:0,103565:2,103566:2,103567:0,103568:0,103569:2,103570:2,103584:0,103585:2,103586:0,103587:2,103588:1,103589:0,103590:2,103591:1,103592:0,103593:2,103594:1,103695:2};for(_=2e3;_<=2045;_++)u[_]=0;for(_=2056;_<=2065;_++)u[_]=0;for(_=2067;_<=2135;_++)u[_]=0;for(_=2137;_<=2154;_++)u[_]=0;for(_=2161;_<=2170;_++)u[_]=0;for(_=2172;_<=2193;_++)u[_]=0;for(_=2195;_<=2198;_++)u[_]=0;for(_=2200;_<=2203;_++)u[_]=0;for(_=2205;_<=2217;_++)u[_]=0;for(_=2222;_<=2224;_++)u[_]=1;for(_=2225;_<=2250;_++)u[_]=2;for(_=2251;_<=2253;_++)u[_]=1;for(_=2257;_<=2264;_++)u[_]=2;for(_=2274;_<=2279;_++)u[_]=2;for(_=2280;_<=2282;_++)u[_]=1;for(_=2283;_<=2289;_++)u[_]=2;for(_=2290;_<=2292;_++)u[_]=0;for(_=2308;_<=2313;_++)u[_]=0;for(_=2315;_<=2491;_++)u[_]=0;for(_=2494;_<=2866;_++)u[_]=0;for(_=2867;_<=2869;_++)u[_]=1;for(_=2870;_<=2888;_++)u[_]=2;for(_=2891;_<=2895;_++)u[_]=2;for(_=2896;_<=2898;_++)u[_]=1;for(_=2902;_<=2908;_++)u[_]=2;for(_=2915;_<=2920;_++)u[_]=2;for(_=2921;_<=2923;_++)u[_]=1;for(_=2924;_<=2930;_++)u[_]=2;for(_=2931;_<=2962;_++)u[_]=0;for(_=2964;_<=2968;_++)u[_]=2;for(_=2969;_<=2973;_++)u[_]=0;for(_=2975;_<=2991;_++)u[_]=0;for(_=2995;_<=3051;_++)u[_]=0;for(_=3054;_<=3079;_++)u[_]=0;for(_=3081;_<=3088;_++)u[_]=0;for(_=3092;_<=3101;_++)u[_]=0;for(_=3106;_<=3138;_++)u[_]=0;for(_=3146;_<=3151;_++)u[_]=0;for(_=3153;_<=3166;_++)u[_]=0;for(_=3168;_<=3172;_++)u[_]=0;for(_=3174;_<=3203;_++)u[_]=0;for(_=3294;_<=3358;_++)u[_]=0;for(_=3367;_<=3403;_++)u[_]=0;for(_=3408;_<=3416;_++)u[_]=0;for(_=3417;_<=3438;_++)u[_]=2;for(_=3441;_<=3446;_++)u[_]=2;for(_=3447;_<=3450;_++)u[_]=0;for(_=3451;_<=3459;_++)u[_]=2;for(_=3460;_<=3478;_++)u[_]=0;for(_=3554;_<=3559;_++)u[_]=0;for(_=3560;_<=3570;_++)u[_]=2;for(_=3571;_<=3581;_++)u[_]=0;for(_=3594;_<=3597;_++)u[_]=0;for(_=3601;_<=3604;_++)u[_]=0;for(_=3637;_<=3639;_++)u[_]=0;for(_=3665;_<=3667;_++)u[_]=0;for(_=3693;_<=3695;_++)u[_]=0;for(_=3701;_<=3727;_++)u[_]=0;for(_=3728;_<=3739;_++)u[_]=2;for(_=3740;_<=3751;_++)u[_]=0;for(_=3753;_<=3760;_++)u[_]=2;for(_=3761;_<=3773;_++)u[_]=0;for(_=3775;_<=3777;_++)u[_]=0;for(_=3779;_<=3781;_++)u[_]=0;for(_=3783;_<=3785;_++)u[_]=0;for(_=3788;_<=3791;_++)u[_]=0;for(_=3797;_<=3802;_++)u[_]=0;for(_=3814;_<=3816;_++)u[_]=0;for(_=3825;_<=3829;_++)u[_]=0;for(_=3832;_<=3841;_++)u[_]=0;for(_=3844;_<=3852;_++)u[_]=0;for(_=3873;_<=3885;_++)u[_]=0;for(_=3890;_<=3893;_++)u[_]=0;for(_=3907;_<=3912;_++)u[_]=0;for(_=3942;_<=3950;_++)u[_]=0;for(_=3968;_<=3970;_++)u[_]=0;for(_=3973;_<=3976;_++)u[_]=0;for(_=3986;_<=3989;_++)u[_]=0;for(_=3994;_<=3997;_++)u[_]=0;for(_=4048;_<=4051;_++)u[_]=0;for(_=4056;_<=4063;_++)u[_]=0;for(_=4093;_<=4096;_++)u[_]=0;for(_=4390;_<=4398;_++)u[_]=0;for(_=4399;_<=4413;_++)u[_]=2;for(_=4418;_<=4433;_++)u[_]=2;for(_=4455;_<=4457;_++)u[_]=2;for(_=4484;_<=4489;_++)u[_]=0;for(_=4491;_<=4554;_++)u[_]=0;for(_=4568;_<=4589;_++)u[_]=0;for(_=4652;_<=4656;_++)u[_]=0;for(_=4766;_<=4800;_++)u[_]=0;for(_=5014;_<=5016;_++)u[_]=0;for(_=5069;_<=5072;_++)u[_]=0;for(_=5105;_<=5130;_++)u[_]=0;for(_=5173;_<=5188;_++)u[_]=0;for(_=5253;_<=5259;_++)u[_]=0;for(_=5269;_<=5275;_++)u[_]=0;for(_=5292;_<=5311;_++)u[_]=0;for(_=5329;_<=5331;_++)u[_]=0;for(_=5343;_<=5349;_++)u[_]=0;for(_=5355;_<=5357;_++)u[_]=0;for(_=5387;_<=5389;_++)u[_]=0;for(_=5459;_<=5463;_++)u[_]=0;for(_=5479;_<=5482;_++)u[_]=0;for(_=5518;_<=5520;_++)u[_]=0;for(_=5530;_<=5539;_++)u[_]=0;for(_=5550;_<=5552;_++)u[_]=0;for(_=5562;_<=5583;_++)u[_]=0;for(_=5623;_<=5625;_++)u[_]=2;for(_=5631;_<=5639;_++)u[_]=0;for(_=5649;_<=5653;_++)u[_]=0;for(_=5663;_<=5680;_++)u[_]=0;for(_=5682;_<=5685;_++)u[_]=0;for(_=5875;_<=5877;_++)u[_]=0;for(_=5896;_<=5899;_++)u[_]=0;for(_=5921;_<=5940;_++)u[_]=0;for(_=6050;_<=6125;_++)u[_]=0;for(_=6244;_<=6275;_++)u[_]=0;for(_=6328;_<=6348;_++)u[_]=0;for(_=6350;_<=6356;_++)u[_]=0;for(_=6366;_<=6372;_++)u[_]=0;for(_=6381;_<=6387;_++)u[_]=0;for(_=6393;_<=6404;_++)u[_]=0;for(_=6480;_<=6483;_++)u[_]=0;for(_=6511;_<=6514;_++)u[_]=0;for(_=6579;_<=6581;_++)u[_]=0;for(_=6619;_<=6624;_++)u[_]=0;for(_=6625;_<=6627;_++)u[_]=2;for(_=6628;_<=6632;_++)u[_]=0;for(_=6634;_<=6637;_++)u[_]=0;for(_=6669;_<=6692;_++)u[_]=0;for(_=6707;_<=6709;_++)u[_]=0;for(_=6720;_<=6723;_++)u[_]=0;for(_=6732;_<=6738;_++)u[_]=0;for(_=6931;_<=6933;_++)u[_]=0;for(_=6956;_<=6959;_++)u[_]=0;for(_=7005;_<=7007;_++)u[_]=0;for(_=7057;_<=7070;_++)u[_]=2;for(_=7074;_<=7082;_++)u[_]=0;for(_=7109;_<=7118;_++)u[_]=0;for(_=7119;_<=7127;_++)u[_]=1;for(_=7374;_<=7376;_++)u[_]=0;for(_=7528;_<=7586;_++)u[_]=0;for(_=7587;_<=7645;_++)u[_]=2;for(_=7692;_<=7696;_++)u[_]=0;for(_=7755;_<=7787;_++)u[_]=0;for(_=7791;_<=7795;_++)u[_]=0;for(_=7799;_<=7801;_++)u[_]=0;for(_=7803;_<=7805;_++)u[_]=0;for(_=7825;_<=7831;_++)u[_]=0;for(_=7845;_<=7859;_++)u[_]=0;for(_=8013;_<=8032;_++)u[_]=0;for(_=8065;_<=8068;_++)u[_]=1;for(_=8518;_<=8529;_++)u[_]=2;for(_=8533;_<=8536;_++)u[_]=2;for(_=8538;_<=8540;_++)u[_]=2;for(_=8677;_<=8679;_++)u[_]=0;for(_=8836;_<=8840;_++)u[_]=0;for(_=8857;_<=8859;_++)u[_]=0;for(_=8908;_<=8910;_++)u[_]=0;for(_=9154;_<=9159;_++)u[_]=0;for(_=9205;_<=9218;_++)u[_]=0;for(_=9271;_<=9273;_++)u[_]=0;for(_=9295;_<=9297;_++)u[_]=0;for(_=9356;_<=9360;_++)u[_]=0;for(_=9404;_<=9407;_++)u[_]=0;for(_=9476;_<=9482;_++)u[_]=0;for(_=9487;_<=9494;_++)u[_]=0;for(_=9697;_<=9699;_++)u[_]=0;for(_=20002;_<=20032;_++)u[_]=0;for(_=20062;_<=20092;_++)u[_]=0;for(_=20135;_<=20138;_++)u[_]=0;for(_=20248;_<=20258;_++)u[_]=0;for(_=20348;_<=20358;_++)u[_]=0;for(_=20436;_<=20440;_++)u[_]=0;for(_=20822;_<=20824;_++)u[_]=0;for(_=20904;_<=20932;_++)u[_]=0;for(_=20934;_<=20936;_++)u[_]=0;for(_=21004;_<=21032;_++)u[_]=0;for(_=21035;_<=21037;_++)u[_]=0;for(_=21095;_<=21097;_++)u[_]=0;for(_=21148;_<=21150;_++)u[_]=0;for(_=21207;_<=21264;_++)u[_]=0;for(_=21307;_<=21364;_++)u[_]=0;for(_=21413;_<=21423;_++)u[_]=0;for(_=21453;_<=21463;_++)u[_]=0;for(_=21473;_<=21483;_++)u[_]=0;for(_=21780;_<=21782;_++)u[_]=0;for(_=21891;_<=21894;_++)u[_]=0;for(_=21896;_<=21899;_++)u[_]=0;for(_=22171;_<=22177;_++)u[_]=0;for(_=22181;_<=22187;_++)u[_]=0;for(_=22191;_<=22197;_++)u[_]=0;for(_=22234;_<=22236;_++)u[_]=0;for(_=22521;_<=22525;_++)u[_]=0;for(_=22991;_<=22994;_++)u[_]=0;for(_=23028;_<=23038;_++)u[_]=0;for(_=23830;_<=23853;_++)u[_]=0;for(_=23866;_<=23872;_++)u[_]=0;for(_=23877;_<=23884;_++)u[_]=0;for(_=23886;_<=23894;_++)u[_]=0;for(_=23946;_<=23948;_++)u[_]=0;for(_=24311;_<=24313;_++)u[_]=0;for(_=24342;_<=24347;_++)u[_]=0;for(_=24370;_<=24374;_++)u[_]=10;for(_=24375;_<=24381;_++)u[_]=0;for(_=24718;_<=24721;_++)u[_]=0;for(_=24817;_<=24821;_++)u[_]=0;for(_=24877;_<=24882;_++)u[_]=0;for(_=24891;_<=24893;_++)u[_]=0;for(_=25391;_<=25395;_++)u[_]=0;for(_=25828;_<=25838;_++)u[_]=0;for(_=26191;_<=26195;_++)u[_]=0;for(_=26391;_<=26393;_++)u[_]=0;for(_=26701;_<=26722;_++)u[_]=0;for(_=26729;_<=26799;_++)u[_]=2;for(_=26801;_<=26803;_++)u[_]=2;for(_=26811;_<=26813;_++)u[_]=2;for(_=26847;_<=26870;_++)u[_]=2;for(_=26891;_<=26899;_++)u[_]=0;for(_=26901;_<=26923;_++)u[_]=0;for(_=26929;_<=26946;_++)u[_]=0;for(_=26948;_<=26998;_++)u[_]=0;for(_=27037;_<=27040;_++)u[_]=0;for(_=27205;_<=27232;_++)u[_]=0;for(_=27258;_<=27260;_++)u[_]=0;for(_=27391;_<=27398;_++)u[_]=0;for(_=27561;_<=27564;_++)u[_]=0;for(_=27571;_<=27574;_++)u[_]=0;for(_=27581;_<=27584;_++)u[_]=0;for(_=27591;_<=27594;_++)u[_]=0;for(_=28191;_<=28193;_++)u[_]=0;for(_=28348;_<=28358;_++)u[_]=0;for(_=28402;_<=28432;_++)u[_]=0;for(_=28462;_<=28492;_++)u[_]=0;for(_=29118;_<=29122;_++)u[_]=0;for(_=29168;_<=29172;_++)u[_]=0;for(_=29177;_<=29185;_++)u[_]=0;for(_=29187;_<=29195;_++)u[_]=0;for(_=29900;_<=29903;_++)u[_]=0;for(_=30161;_<=30179;_++)u[_]=0;for(_=30491;_<=30494;_++)u[_]=0;for(_=30729;_<=30732;_++)u[_]=0;for(_=31251;_<=31259;_++)u[_]=0;for(_=31265;_<=31268;_++)u[_]=0;for(_=31275;_<=31279;_++)u[_]=0;for(_=31281;_<=31297;_++)u[_]=0;for(_=31461;_<=31469;_++)u[_]=0;for(_=31491;_<=31495;_++)u[_]=0;for(_=31917;_<=31922;_++)u[_]=0;for(_=31965;_<=32e3;_++)u[_]=0;for(_=32001;_<=32003;_++)u[_]=2;for(_=32005;_<=32031;_++)u[_]=2;for(_=32033;_<=32060;_++)u[_]=2;for(_=32064;_<=32067;_++)u[_]=2;for(_=32074;_<=32077;_++)u[_]=2;for(_=32081;_<=32086;_++)u[_]=0;for(_=32107;_<=32130;_++)u[_]=0;for(_=32133;_<=32158;_++)u[_]=0;for(_=32164;_<=32167;_++)u[_]=2;for(_=32180;_<=32199;_++)u[_]=0;for(_=32201;_<=32260;_++)u[_]=0;for(_=32301;_<=32360;_++)u[_]=0;for(_=32601;_<=32662;_++)u[_]=0;for(_=32664;_<=32667;_++)u[_]=2;for(_=32701;_<=32761;_++)u[_]=0;for(_=53001;_<=53004;_++)u[_]=0;for(_=53008;_<=53019;_++)u[_]=0;for(_=53021;_<=53032;_++)u[_]=0;for(_=53034;_<=53037;_++)u[_]=0;for(_=53042;_<=53046;_++)u[_]=0;for(_=53074;_<=53080;_++)u[_]=0;for(_=54001;_<=54004;_++)u[_]=0;for(_=54008;_<=54019;_++)u[_]=0;for(_=54021;_<=54032;_++)u[_]=0;for(_=54034;_<=54037;_++)u[_]=0;for(_=54042;_<=54046;_++)u[_]=0;for(_=54048;_<=54053;_++)u[_]=0;for(_=54074;_<=54080;_++)u[_]=0;for(_=54098;_<=54101;_++)u[_]=0;for(_=102001;_<=102040;_++)u[_]=0;for(_=102042;_<=102063;_++)u[_]=0;for(_=102065;_<=102067;_++)u[_]=0;for(_=102070;_<=102117;_++)u[_]=0;for(_=102122;_<=102216;_++)u[_]=0;for(_=102221;_<=102377;_++)u[_]=0;for(_=102382;_<=102388;_++)u[_]=0;for(_=102389;_<=102398;_++)u[_]=2;for(_=102399;_<=102444;_++)u[_]=0;for(_=102445;_<=102447;_++)u[_]=2;for(_=102448;_<=102458;_++)u[_]=0;for(_=102459;_<=102468;_++)u[_]=2;for(_=102469;_<=102499;_++)u[_]=0;for(_=102500;_<=102519;_++)u[_]=1;for(_=102520;_<=102524;_++)u[_]=0;for(_=102525;_<=102529;_++)u[_]=2;for(_=102530;_<=102588;_++)u[_]=0;for(_=102590;_<=102598;_++)u[_]=0;for(_=102601;_<=102603;_++)u[_]=0;for(_=102605;_<=102628;_++)u[_]=0;for(_=102629;_<=102646;_++)u[_]=2;for(_=102648;_<=102700;_++)u[_]=2;for(_=102701;_<=102703;_++)u[_]=0;for(_=102707;_<=102730;_++)u[_]=2;for(_=102733;_<=102758;_++)u[_]=2;for(_=102767;_<=102900;_++)u[_]=0;for(_=102901;_<=102933;_++)u[_]=2;for(_=102934;_<=102950;_++)u[_]=13;for(_=102951;_<=102955;_++)u[_]=0;for(_=102961;_<=102963;_++)u[_]=0;for(_=102965;_<=102969;_++)u[_]=0;for(_=102971;_<=102973;_++)u[_]=0;for(_=102975;_<=102989;_++)u[_]=0;for(_=102990;_<=102992;_++)u[_]=1;for(_=102997;_<=103002;_++)u[_]=0;for(_=103003;_<=103008;_++)u[_]=2;for(_=103009;_<=103011;_++)u[_]=0;for(_=103012;_<=103014;_++)u[_]=2;for(_=103019;_<=103021;_++)u[_]=0;for(_=103022;_<=103024;_++)u[_]=2;for(_=103029;_<=103031;_++)u[_]=0;for(_=103032;_<=103034;_++)u[_]=2;for(_=103065;_<=103068;_++)u[_]=0;for(_=103074;_<=103076;_++)u[_]=0;for(_=103077;_<=103079;_++)u[_]=1;for(_=103080;_<=103082;_++)u[_]=0;for(_=103083;_<=103085;_++)u[_]=2;for(_=103090;_<=103093;_++)u[_]=0;for(_=103097;_<=103099;_++)u[_]=0;for(_=103100;_<=103102;_++)u[_]=2;for(_=103107;_<=103109;_++)u[_]=0;for(_=103110;_<=103112;_++)u[_]=2;for(_=103113;_<=103116;_++)u[_]=0;for(_=103117;_<=103120;_++)u[_]=2;for(_=103153;_<=103157;_++)u[_]=0;for(_=103158;_<=103162;_++)u[_]=2;for(_=103163;_<=103165;_++)u[_]=0;for(_=103166;_<=103168;_++)u[_]=1;for(_=103169;_<=103171;_++)u[_]=2;for(_=103186;_<=103188;_++)u[_]=0;for(_=103189;_<=103191;_++)u[_]=2;for(_=103192;_<=103195;_++)u[_]=0;for(_=103196;_<=103199;_++)u[_]=2;for(_=103200;_<=103224;_++)u[_]=0;for(_=103225;_<=103227;_++)u[_]=1;for(_=103232;_<=103237;_++)u[_]=0;for(_=103238;_<=103243;_++)u[_]=2;for(_=103244;_<=103246;_++)u[_]=0;for(_=103247;_<=103249;_++)u[_]=2;for(_=103254;_<=103256;_++)u[_]=0;for(_=103257;_<=103259;_++)u[_]=2;for(_=103264;_<=103266;_++)u[_]=0;for(_=103267;_<=103269;_++)u[_]=2;for(_=103300;_<=103375;_++)u[_]=0;for(_=103381;_<=103383;_++)u[_]=0;for(_=103384;_<=103386;_++)u[_]=1;for(_=103387;_<=103389;_++)u[_]=0;for(_=103390;_<=103392;_++)u[_]=2;for(_=103397;_<=103399;_++)u[_]=0;for(_=103400;_<=103471;_++)u[_]=2;for(_=103476;_<=103478;_++)u[_]=0;for(_=103479;_<=103481;_++)u[_]=2;for(_=103486;_<=103488;_++)u[_]=0;for(_=103489;_<=103491;_++)u[_]=2;for(_=103492;_<=103495;_++)u[_]=0;for(_=103496;_<=103499;_++)u[_]=2;for(_=103528;_<=103543;_++)u[_]=0;for(_=103544;_<=103548;_++)u[_]=2;for(_=103549;_<=103551;_++)u[_]=0;for(_=103552;_<=103554;_++)u[_]=1;for(_=103555;_<=103557;_++)u[_]=2;for(_=103558;_<=103560;_++)u[_]=0;for(_=103571;_<=103573;_++)u[_]=0;for(_=103574;_<=103576;_++)u[_]=2;for(_=103577;_<=103580;_++)u[_]=0;for(_=103581;_<=103583;_++)u[_]=2;for(_=103595;_<=103694;_++)u[_]=0;for(_=103696;_<=103699;_++)u[_]=0;for(_=103700;_<=103793;_++)u[_]=2;for(_=103794;_<=103887;_++)u[_]=0;for(_=103900;_<=103971;_++)u[_]=2;const S={102113:!0,102100:!0,3857:!0,3785:!0},c={4326:!0,3785:!0,3857:!0,102113:!0,102100:!0,104905:!0,104971:!0},k='PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',p=[-20037508.342788905,20037508.342788905],w=[-20037508.342787,20037508.342787],M={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:p,origin:w,dx:1e-5},102100:{wkTemplate:k,valid:p,origin:w,dx:1e-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:p,origin:w,dx:1e-5},3857:{wkTemplate:k,valid:p,origin:w,dx:1e-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104971:{wkTemplate:'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104905:{wkTemplate:'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5}};function m(r,o){return!s(r)&&!s(o)&&(r===o||(null!=r.wkid||null!=o.wkid?r.wkid===o.wkid||A(r)&&A(o)||null!=o.latestWkid&&r.wkid===o.latestWkid||null!=r.latestWkid&&o.wkid===r.latestWkid:!(!r.wkt||!o.wkt)&&r.wkt.toUpperCase()===o.wkt.toUpperCase()))}function h(r){return j(r)&&r.wkid&&M[r.wkid]||null}function C(r){return!!j(r)&&(r.wkid?null==u[r.wkid]:!!r.wkt&&!!/^\s*GEOGCS/i.test(r.wkt))}function G(r){return!(y(r)||P(r))}function E(r){return j(r)&&4326===r.wkid}function R(r){return j(r)&&r.wkid===d.CGCS2000}function A(r){return j(r)&&null!=r.wkid&&!0===S[r.wkid]}function W(r){return j(r)&&32662===r.wkid}function g(r){return r===d.GCSMARS2000||r===d.GCSMARS2000_SPHERE}function y(r){return j(r)&&null!=r.wkid&&g(r.wkid)}function T(r){return r===d.GCSMOON2000}function P(r){return j(r)&&null!=r.wkid&&T(r.wkid)}function O(r){return j(r)&&null!=r.wkid&&!0===c[r.wkid]}function j(r){return a(r)&&(null!=r.wkid&&r.wkid>=2e3||null!=r.wkt)}const I={wkid:4326,wkt:l(M[4326].wkTemplate,{Central_Meridian:"0.0"})};var N;let D=N=class extends o{constructor(r){super(r),this.latestWkid=null,this.wkid=null,this.wkt=null,this.vcsWkid=null,this.latestVcsWkid=null,this.imageCoordinateSystem=null}static fromJSON(r){if(!r)return null;if(r.wkid){if(102100===r.wkid)return N.WebMercator;if(4326===r.wkid)return N.WGS84}const o=new N;return o.read(r),o}normalizeCtorArgs(r){return r&&"object"==typeof r?r:{["string"==typeof r?"wkt":"wkid"]:r}}get isWGS84(){return E(this)}get isWebMercator(){return A(this)}get isGeographic(){return C(this)}get isWrappable(){return O(this)}writeWkt(r,o){this.wkid||(o.wkt=r)}clone(){if(this===N.WGS84)return N.WGS84;if(this===N.WebMercator)return N.WebMercator;const r=new N;return null!=this.wkid?(r.wkid=this.wkid,null!=this.latestWkid&&(r.latestWkid=this.latestWkid),null!=this.vcsWkid&&(r.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(r.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(r.wkt=this.wkt),this.imageCoordinateSystem&&(r.imageCoordinateSystem=e(this.imageCoordinateSystem)),r}equals(r){if(null==r)return!1;if(this.imageCoordinateSystem||r.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==r.imageCoordinateSystem)return!1;const{id:o,referenceServiceName:e}=r.imageCoordinateSystem,{geodataXform:f}=r.imageCoordinateSystem,t=this.imageCoordinateSystem;return null==o||f?JSON.stringify(t)===JSON.stringify(r.imageCoordinateSystem):e?t.id===o&&t.referenceServiceName===e:t.id===o}return m(this,r)}toJSON(r){return this.write(void 0,r)}};D.GCS_NAD_1927=null,D.WGS84=null,D.WebMercator=null,D.PlateCarree=null,r([t({readOnly:!0})],D.prototype,"isWGS84",null),r([t({readOnly:!0})],D.prototype,"isWebMercator",null),r([t({readOnly:!0})],D.prototype,"isGeographic",null),r([t({readOnly:!0})],D.prototype,"isWrappable",null),r([t({type:f,json:{write:!0}})],D.prototype,"latestWkid",void 0),r([t({type:f,json:{write:!0,origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkt}}}}}}})],D.prototype,"wkid",void 0),r([t({type:String,json:{origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkid}}}}}}})],D.prototype,"wkt",void 0),r([n("wkt"),n("web-scene","wkt")],D.prototype,"writeWkt",null),r([t({type:f,json:{write:!0}})],D.prototype,"vcsWkid",void 0),r([t({type:f,json:{write:!0}})],D.prototype,"latestVcsWkid",void 0),r([t()],D.prototype,"imageCoordinateSystem",void 0),D=N=r([i("esri.geometry.SpatialReference")],D),D.prototype.toJSON.isDefaultToJSON=!0,D.GCS_NAD_1927=new D({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),D.WGS84=new D(I),D.WebMercator=new D({wkid:102100,latestWkid:3857}),D.PlateCarree=new D({wkid:32662}),Object.freeze&&(Object.freeze(D.GCS_NAD_1927),Object.freeze(D.WGS84),Object.freeze(D.WebMercator));const b=D;export{d as S,I as W,E as a,G as b,g as c,T as d,b as default,m as e,y as f,h as g,P as h,A as i,j,W as k,C as l,R as m,O as n,u as o};
