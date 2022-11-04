// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderModules/Float4Uniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DUniform ../views/3d/webgl-engine/lib/SMAATechniqueConfiguration ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(k,e,b,m,d,f,g){function l(h){const a=new m.ShaderBuilder;h.output===f.SMAAOutput.EdgeDetector&&(a.attributes.add(g.VertexAttribute.POSITION,
"vec2"),a.vertex.uniforms.add(new e.Float4Uniform("resolution")),a.varyings.add("fTexCoord","vec2"),a.varyings.add("fOffset[3]","vec4"),a.vertex.code.add(b.glsl`void SMAAEdgeDetectionVS( vec2 texcoord ) {
fOffset[0] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 );
fOffset[1] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 );
fOffset[2] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 );
}
void main() {
fTexCoord = (position + 1.0 ) * 0.5;
gl_Position = vec4(position, 0, 1);
SMAAEdgeDetectionVS( fTexCoord );
}`),a.fragment.uniforms.add(new d.Texture2DUniform("tColor")),a.fragment.code.add(b.glsl`
      vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
        vec2 threshold = vec2( ${b.glsl.float(c.threshold)} );

        // Calculate color deltas:
        vec4 delta;
        vec3 C = texture2D( colorTex, texcoord ).rgb;

        vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
        vec3 t = abs( C - Cleft );
        delta.x = max( max( t.r, t.g ), t.b );

        vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
        t = abs( C - Ctop );
        delta.y = max( max( t.r, t.g ), t.b );

        // We do the usual threshold:
        vec2 edges = step( threshold, delta.xy );

        // Then discard if there is no edge:
        if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
            discard;

        // Calculate right and bottom deltas:
        vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
        t = abs( C - Cright );
        delta.z = max( max( t.r, t.g ), t.b );

        vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
        t = abs( C - Cbottom );
        delta.w = max( max( t.r, t.g ), t.b );

        // Calculate the maximum delta in the direct neighborhood:
        float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

        // Calculate left-left and top-top deltas:
        vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
        t = abs( C - Cleftleft );
        delta.z = max( max( t.r, t.g ), t.b );

        vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
        t = abs( C - Ctoptop );
        delta.w = max( max( t.r, t.g ), t.b );

        // Calculate the final maximum delta:
        maxDelta = max( max( maxDelta, delta.z ), delta.w );

        // Local contrast adaptation in action:
        edges.xy *= step( maxDelta, float(${b.glsl.float(c.localConstrastAdaption)}) * delta.xy );

        return vec4( edges, 0.0, 0.0 );
      }

      void main() {
        gl_FragColor = SMAAColorEdgeDetectionPS( fTexCoord, fOffset, tColor );
      }
    `));h.output===f.SMAAOutput.BlendWeight&&(a.attributes.add(g.VertexAttribute.POSITION,"vec2"),a.vertex.uniforms.add(new e.Float4Uniform("resolution")),a.varyings.add("fTexCoord","vec2"),a.varyings.add("fOffset[3]","vec4"),a.varyings.add("fPixCoord","vec2"),a.vertex.code.add(b.glsl`
      void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
        fPixCoord = texcoord * resolution.zw;
        fOffset[0] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 );
        fOffset[1] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 );
        fOffset[2] = vec4( fOffset[0].xz, fOffset[1].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( ${b.glsl.int(c.maxSearchSteps)} );
      }

      void main() {
        fTexCoord = (position + 1.0 ) * 0.5;
        gl_Position = vec4(position, 0, 1);
        SMAABlendingWeightCalculationVS( fTexCoord );
      }
    `),a.fragment.uniforms.add(new d.Texture2DUniform("tEdges")),a.fragment.uniforms.add(new d.Texture2DUniform("tArea")),a.fragment.uniforms.add(new d.Texture2DUniform("tSearch")),a.fragment.uniforms.add(new d.Texture2DUniform("tColor")),a.fragment.uniforms.add(new e.Float4Uniform("resolution")),a.fragment.code.add(b.glsl`
      #define SMAA_AREATEX_PIXEL_SIZE ( 1.0 / vec2( 160.0, 560.0 ) )
      #define SMAA_AREATEX_SUBTEX_SIZE ( 1.0 / 7.0 )

      vec4 SMAASampleLevelZeroOffset(sampler2D texture, vec2 coord, vec2 offset) {
        return texture2D(texture, coord + offset.x * resolution.xy, 0.0);
      }

      vec2 round( vec2 x ) {
        return sign( x ) * floor( abs( x ) + 0.5 );
      }

      float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
        e.r = bias + e.r * scale;
        return 255.0 * texture2D( searchTex, e, 0.0 ).r;
      }

      float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 0.0, 1.0 );
        for ( int i = 0; i < ${b.glsl.int(c.maxSearchSteps)}; i ++ ) {
          e = texture2D( edgesTex, texcoord, 0.0 ).rg;
          texcoord -= vec2( 2.0, 0.0 ) * resolution.xy;
          if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
        }
        texcoord.x += 0.25 * resolution.x;
        texcoord.x += resolution.x;
        texcoord.x += 2.0 * resolution.x;
        texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);
        return texcoord.x;
      }

      float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 0.0, 1.0 );
        for ( int i = 0; i < ${b.glsl.int(c.maxSearchSteps)}; i ++ ) {
          e = texture2D( edgesTex, texcoord, 0.0 ).rg;
          texcoord += vec2( 2.0, 0.0 ) * resolution.xy;
          if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
        }
        texcoord.x -= 0.25 * resolution.x;
        texcoord.x -= resolution.x;
        texcoord.x -= 2.0 * resolution.x;
        texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );
        return texcoord.x;
      }

      float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 1.0, 0.0 );
        for ( int i = 0; i < ${b.glsl.int(c.maxSearchSteps)}; i ++ ) {
          e = texture2D( edgesTex, texcoord, 0.0 ).rg;
          texcoord += vec2( 0.0, 2.0 ) * resolution.xy;
          if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
        }
        texcoord.y -= 0.25 * resolution.y;
        texcoord.y -= resolution.y;
        texcoord.y -= 2.0 * resolution.y;
        texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 );
        return texcoord.y;
      }

      float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 1.0, 0.0 );
        for ( int i = 0; i < ${b.glsl.int(c.maxSearchSteps)}; i ++ ) {
          e = texture2D( edgesTex, texcoord, 0.0 ).rg;
          texcoord -= vec2( 0.0, 2.0 ) * resolution.xy;
          if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
        }
        texcoord.y += 0.25 * resolution.y;
        texcoord.y += resolution.y;
        texcoord.y += 2.0 * resolution.y;
        texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 );
        return texcoord.y;
      }

      vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
        vec2 texcoord = float( ${b.glsl.int(c.maxDistanceAreaTex)} ) * round( 4.0 * vec2( e1, e2 ) ) + dist;
        texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );
        texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;
        return texture2D( areaTex, texcoord, 0.0 ).rg;
      }

      vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
        vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );
        vec2 e = texture2D( edgesTex, texcoord ).rg;
        if ( e.g > 0.0 ) {
          vec2 d;
          vec2 coords;
          coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
          coords.y = offset[ 1 ].y;
          d.x = coords.x;
          float e1 = texture2D( edgesTex, coords, 0.0 ).r;
          coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
          d.y = coords.x;
          d = d * resolution.z - pixcoord.x;
          vec2 sqrt_d = sqrt( abs( d ) );
          coords.y -= 1.0 * resolution.y;
          float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, vec2( 1.0, 0.0 ) ).r;
          weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
        }

        if ( e.r > 0.0 ) {
          vec2 d;
          vec2 coords;
          coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
          coords.x = offset[ 0 ].x;
          d.x = coords.y;
          float e1 = texture2D( edgesTex, coords, 0.0 ).g;
          coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
          d.y = coords.y;
          d = d * resolution.w - pixcoord.y;
          vec2 sqrt_d = sqrt( abs( d ) );
          coords.y -= 1.0 * resolution.y;
          float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, vec2( 0.0, 1.0 ) ).g;
          weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );

          // for some reason the following lines are necessary to prevent
          // texture lookup precision issues on some Intel integrated graphics chips
          vec4 dbg = (offset[ 0 ]+offset[ 1 ]+offset[ 2 ] + coords.xyyx);
          weights.r += 0.00000001 * dot(vec4(0,1,0,1),dbg);
        }
        return weights;
      }

      void main() {
        gl_FragColor = SMAABlendingWeightCalculationPS( fTexCoord, fPixCoord, fOffset, tEdges, tArea, tSearch, ivec4( 0.0 ) );
      }
    `));h.output===f.SMAAOutput.Blur&&(a.attributes.add(g.VertexAttribute.POSITION,"vec2"),a.vertex.uniforms.add(new e.Float4Uniform("resolution")),a.varyings.add("fTexCoord","vec2"),a.varyings.add("fOffset[2]","vec4"),a.vertex.code.add(b.glsl`void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
fOffset[0] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 );
fOffset[1] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 );
}
void main() {
fTexCoord = (position + 1.0 ) * 0.5;
gl_Position = vec4(position, 0, 1);
SMAANeighborhoodBlendingVS(fTexCoord);
}`),a.fragment.uniforms.add(new d.Texture2DUniform("tBlendWeights")),a.fragment.uniforms.add(new d.Texture2DUniform("tColor")),a.fragment.uniforms.add(new e.Float4Uniform("resolution")),a.fragment.code.add(b.glsl`vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
vec4 a;
a.xz = texture2D( blendTex, texcoord ).xz;
a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
a.w = texture2D( blendTex, offset[ 1 ].xy ).a;
if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
return texture2D( colorTex, texcoord, 0.0 );
} else {
vec2 offset;
offset.x = a.a > a.b ? a.a : -a.b;
offset.y = a.g > a.r ? -a.g : a.r;
if ( abs( offset.x ) > abs( offset.y )) {
offset.y = 0.0;
} else {
offset.x = 0.0;
}
vec4 C = texture2D( colorTex, texcoord, 0.0 );
texcoord += sign( offset ) * resolution.xy;
vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );
vec4 mixed = mix(C, Cop, s);
return mixed;
}
}
void main() {
gl_FragColor = SMAANeighborhoodBlendingPS( fTexCoord, fOffset, tColor, tBlendWeights );
}`));return a}const c={threshold:.05,localConstrastAdaption:2,maxSearchSteps:8,maxDistanceAreaTex:16},n=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}));k.SMAA=n;k.build=l});