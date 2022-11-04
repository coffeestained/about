// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../candidates/EdgeSnappingCandidate","../candidates/VertexSnappingCandidate"],function(c,e,f){c.convertSnappingCandidate=function(a,b,d){switch(a.type){case "edge":return new e.EdgeSnappingCandidate({coordinateHelper:b,edgeStart:b.pointToVector(a.start),edgeEnd:b.pointToVector(a.end),targetPoint:b.pointToVector(a.target),objectId:a.objectId,elevationInfo:d});case "vertex":return new f.VertexSnappingCandidate({coordinateHelper:b,targetPoint:b.pointToVector(a.target),objectId:a.objectId,
elevationInfo:d})}};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});