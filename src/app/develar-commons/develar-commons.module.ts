import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DevelarMaterialModule }   from './develar-materials.module';
import { FileUploadModule }        from 'ng2-file-upload';

import { FileComponent }           from './file/file.component';
import { UploadComponent }         from './upload/upload.component';
import { AssetcreateComponent }    from './assets/assetcreate/assetcreate.component';
import { AsseteditComponent }      from './assets/assetedit/assetedit.component';
import { AssetPredicateComponent } from './assets/asset-predicate/asset-predicate.component';
import { AssetPageComponent }      from './assets/asset-page/asset-page.component';

import { UpdatefileComponent }     from './assets/updatefile/updatefile.component';
import { AssetSearchComponent }    from './assets/asset-search/asset-search.component';

import { FoldercreateComponent }    from './folders/foldercreate/foldercreate.component';

import { FoldereditComponent }      from './folders/folderedit/folderedit.component';
import { FolderBrowseComponent }    from './folders/folder-browse/folder-browse.component';

import { AssetService } from './asset.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DevelarMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
  declarations: [
    FileComponent,
    UploadComponent,
    AssetcreateComponent,
    FoldercreateComponent,
    FolderBrowseComponent,
    FoldereditComponent,
    AsseteditComponent,
    AssetPredicateComponent,
    AssetPageComponent,
    UpdatefileComponent,
    AssetSearchComponent,
  ],
  exports:[
    DevelarMaterialModule,
    FileUploadModule,
    FileComponent,
    UploadComponent,
    AssetcreateComponent,
    FoldercreateComponent,
    FolderBrowseComponent,
    FoldereditComponent,
    AsseteditComponent,
    AssetPredicateComponent,
    AssetPageComponent,
    UpdatefileComponent,
    AssetSearchComponent,
  ],
  providers: [
    AssetService,
  ]
})
export class DevelarCommonsModule { }
