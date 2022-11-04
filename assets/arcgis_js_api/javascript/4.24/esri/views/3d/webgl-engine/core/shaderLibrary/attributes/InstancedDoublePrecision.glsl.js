// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/vec3 ../../../../../../chunks/vec3f64 ../ShaderOutputOptions ../util/DoublePrecision.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/interfaces ../../shaderModules/Matrix4PassUniform ../../../lib/VertexAttribute ../../../../../webgl/doublePrecisionUtils".split(" "),function(g,h,n,p,q,k,d,r,e,l){const f=n.create();g.InstancedDoublePrecision=function(a,b){b.instanced&&b.instancedDoublePrecision&&(a.attributes.add(e.VertexAttribute.MODELORIGINHI,
"vec3"),a.attributes.add(e.VertexAttribute.MODELORIGINLO,"vec3"),a.attributes.add(e.VertexAttribute.MODEL,"mat3"),a.attributes.add(e.VertexAttribute.MODELNORMAL,"mat3"));a=a.vertex;b.instancedDoublePrecision&&(a.include(q.DoublePrecision,b),a.uniforms.add(new k.Float3DrawUniform("viewOriginHi",(m,c)=>l.encodeDoubleHi(h.set(f,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),f))),a.uniforms.add(new k.Float3DrawUniform("viewOriginLo",
(m,c)=>l.encodeDoubleLo(h.set(f,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),f))));a.code.add(d.glsl`
    vec3 calculateVPos() {
      ${b.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `);a.code.add(d.glsl`
    vec3 subtractOrigin(vec3 _pos) {
      ${b.instancedDoublePrecision?d.glsl`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `);a.code.add(d.glsl`
    vec3 dpNormal(vec4 _normal) {
      ${b.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `);b.output===p.ShaderOutput.Normal&&(a.uniforms.add(new r.Matrix4PassUniform("viewNormal",(m,c)=>c.camera.viewInverseTransposeMatrix)),a.code.add(d.glsl`
    vec3 dpNormalView(vec4 _normal) {
      ${b.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `));b.hasVertexTangents&&a.code.add(d.glsl`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${b.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});