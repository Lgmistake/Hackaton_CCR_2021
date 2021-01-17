import { BlockType } from './../class/BlockType';
import { URL_API } from './../url.api';
import { Block } from './../class/Block';
import { Document } from './../class/Document';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(private http: HttpClient) {}

  searchContracts(documentFilter): Observable<Document[]> {
    return this.http.post<Document[]>(
      `${URL_API}/document/search`,
      documentFilter
    );
  }
  searchBlocksByDocumentId(documentId): Observable<Block[]> {
    return this.http.get<Block[]>(`${URL_API}/document/${documentId}`);
  }
  searchBlockTypes(): Observable<BlockType[]> {
    return this.http.get<BlockType[]>(`${URL_API}/blockType`);
  }
  createDocument(document: Document): Observable<Document> {
    return this.http.post<Document>(`${URL_API}/document`, document);
  }
  createBlock(document: Document): Observable<Document> {
    return this.http.post<Document>(`${URL_API}/document`, document);
  }
  updateBlock(block): Observable<Block> {
    return this.http.put(`${URL_API}/block/${block.id}`, block);
  }
  findDocument(idDocument): Observable<Document> {
    return this.http.get<Document>(`${URL_API}/document/${idDocument}`);
  }
}
