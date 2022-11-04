// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/mathUtils ../../../../../../core/maybe ../../../../../../chunks/vec2 ../../../../../../chunks/vec2f64 ../../../../../../geometry/support/Ellipsoid ../../../../environment/CloudsCompositionParameters ../../shaderModules/BooleanPassUniform ../../shaderModules/Float2PassUniform ../../shaderModules/Float3PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Matrix4PassUniform ../../shaderModules/TextureCubePassUniform".split(" "),
function(h,g,k,n,l,p,q,r,t,e,f,d,m,u){const v=l.create();h.CloudsParallaxShading=function(b){b=b.fragment;b.uniforms.add([new m.Matrix4PassUniform("rotationMatrixClouds",(c,a)=>a.clouds.parallax.transform),new m.Matrix4PassUniform("rotationMatrixCloudsCrossFade",(c,a)=>a.clouds.parallaxNew.transform),new e.Float3PassUniform("anchorPosition",(c,a)=>a.clouds.parallax.anchorPointClouds),new e.Float3PassUniform("anchorPositionCrossFade",(c,a)=>a.clouds.parallaxNew.anchorPointClouds),new t.Float2PassUniform("cloudVariables",
(c,a)=>k.isSome(a.clouds.data)?n.set(v,a.clouds.data.coverage,a.clouds.data.absorption):l.ZEROS),new f.FloatPassUniform("cloudsHeight",(c,a)=>a.clouds.parallax.cloudsHeight),new f.FloatPassUniform("radiusCurvatureCorrectionFactor",(c,a)=>a.clouds.parallax.radiusCurvatureCorrectionFactor),new f.FloatPassUniform("totalFadeInOut",(c,a)=>a.clouds.fadeInOut.stage===q.FadeInOutStages.FINISHED?a.clouds.fadeInOutHeight.factor+Math.max(g.clamp(a.clouds.fadeIn.factor,0,1)):a.clouds.fadeInOutHeight.factor+Math.max(g.clamp(a.clouds.fadeInOut.factor,
0,1))),new f.FloatPassUniform("crossFadeAnchorFactor",(c,a)=>g.clamp(a.clouds.crossFade.factor,0,1)),new u.TextureCubePassUniform("cubeMap",(c,a)=>k.isSome(a.clouds.data)?a.clouds.data.cubeMap.colorTexture:null),new r.BooleanPassUniform("crossFade",(c,a)=>a.clouds.crossFade.enabled)]);b.constants.add("planetRadius","float",p.earth.radius);b.code.add(d.glsl`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`);b.code.add(d.glsl`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`);b.code.add(d.glsl`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`);b.uniforms.add([new e.Float3PassUniform("lightingMainDirection",(c,a)=>a.lighting.lightingMainDirection),new e.Float3PassUniform("lightingMainIntensity",(c,a)=>a.lighting.mainLight.intensity)]);b.code.add(d.glsl`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(lightingMainDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(lightingMainDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((lightingMainIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * pow(dirDotLight, RIM_SCATTERING_FACTOR) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`);b.code.add(d.glsl`vec4 getCloudData(vec3 rayDir)
{
vec4 cloudData = textureCube(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
return mix(vec4(vec3(clamp(1.0 - cloudVariables.y, 0.6, 1.0)), 0.0), cloudData, smoothstep(-0.01, mix(0.0, 0.075, cloudVariables.x), abs(mu)));
}`);b.code.add(d.glsl`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`);b.code.add(d.glsl`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`);b.code.add(d.glsl`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`)};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});